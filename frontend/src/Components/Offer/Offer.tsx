import { useState } from "react";
import { Link } from 'react-router-dom'
import women from '../Assets/women-collection.jpg'
import men from '../Assets/men-collection.jpg'
const Offer: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <div
    className={`container mx-auto px-4 py-16 bg-gray-50 rounded-xl shadow-xl transform transition-transform duration-1000 ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
    }`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-deepPlum drop-shadow-lg">
      Exclusive Gears
    </h2>
    <p className="text-center text-xl font-bold  text-black mb-10 md:max-w-2xl mx-auto">
    "Discover our handpicked, exclusive sportswear that adds a touch of style and uniqueness to your active wardrobe. Limited stock available!"</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">
        <img
          src={women}
          alt="Exclusive Gear"
          className="w-full h-96 object-cover rounded-lg mb-4 transform transition-transform duration-500 hover:scale-105"
        />
        <h3 className="text-lg font-semibold mb-2 text-deepPlum drop-shadow-sm">
          Exclusive Gear
        </h3>
        <p className="text-gray-500 mb-4 text-sm">
        Elevate your performance with this exclusive, limited-edition sportswear.
        </p>
        <Link to='/shop'>
        <button className="bg-roseGold text-white py-2 px-6 rounded-full shadow-lg transition duration-300 hover:bg-deepPlum hover:shadow-2xl">
          Shop Now
        </button>
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">
        <img
          src={men}
          alt="Exclusive Gear"
          className="w-full h-96  object-cover rounded-lg mb-4 transform transition-transform duration-500 hover:scale-105"
        />
        <h3 className="text-lg font-semibold mb-2 text-deepPlum drop-shadow-sm">
          Exclusive Gear
        </h3>
        <p className="text-gray-500 mb-4 text-sm">
        Add a touch of premium style to your collection with this exclusive sports tee..
        </p>
        <Link to='/shop'>
        <button className="bg-deepPlum text-white py-2 px-6 rounded-full shadow-lg transition duration-300 hover:bg-deepPlum hover:shadow-2xl">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
export default Offer