import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Bar, Pie, Line} from 'react-chartjs-2';
import 'chart.js/auto'; 
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const Dashboard = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [categoryData, setCategoryData] = useState({});
    const [productsOverTime, setProductsOverTime] = useState([]);
    useEffect(() => {
        const fetchTotalProducts = async () => {
            try {
                const response = await fetch('https://threshold-server.onrender.com/api/products/count');
                const data = await response.json();
                setTotalProducts(data.total); 
            } catch (error) {
                console.error("Error fetching total products:", error);
            }
        };
        fetchTotalProducts(); 
    }, []);
    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetch('https://threshold-server.onrender.com/api/admin/products/count-by-category');
                const data = await response.json();
                setCategoryData(data);
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };
        fetchCategoryData();
    }, []);
    const pieData = {
        labels: ['Total Products'],
        datasets: [
            {
                data: [totalProducts, totalProducts === 0 ? 1 : 0],
                backgroundColor: ['rgba(255, 255, 0, 0)', 'rgba(211, 211, 211, 0.6)'],
                borderColor: ['rgba(255, 255, 255, 255)', 'rgba(211, 211, 211, 1)'],
                borderWidth: 1,
            },
        ],
    };
    const chartData = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                label: 'Number of Products',
                data: Object.values(categoryData),
                backgroundColor: '#FCE4EC', 
                borderColor: '#ffffff',     
                borderWidth: 1,
            },
        ],
    };
    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };   
    return (
        <div className="p-6 lg:p-10 bg-blue-100 min-h-screen flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold text-center mb-8 text-black bg-customPurple rounded-2xl p-4">Admin Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
                <div className="bg-customPurple p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-center text-white">Total Products</h3>
                    <div className="h-64 align-middle">
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                    <p className="text-md mt-6 font-semibold mb-4 text-center text-white">Total Products : {totalProducts}</p>
                </div>
                <div className="bg-customPurple p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-10 text-center text-white">Products By Category</h3>
                    <div className="h-64">
                    <Bar data={chartData} options={chartOptions} />
                    </div>
                    <p className="text-md font-semibold mb-4 text-center text-white">Men Products: {categoryData.men} </p>
                    <p className="text-md font-semibold mb-4 text-center text-white">Women Products: {categoryData.women}</p>
                </div>
            </div> 
        </div>
    )
};
export default Dashboard;
