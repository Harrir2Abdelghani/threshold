import React, { useState, useEffect, ChangeEvent } from 'react';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

interface ResponseData {
  success: boolean;
  authToken?: string;
  errors?: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signin = async () => {
    let responseData: ResponseData | undefined;

    await fetch('https://threshold-server.onrender.com/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData?.success) {
      if (responseData.authToken) {
        localStorage.setItem('auth-token', responseData.authToken);
      }
      navigate('/shop');
    } else {
      alert(responseData?.errors || 'An error occurred.');
    }
  };

  return (
    <section className="h-screen -mt-24 flex flex-col md:flex-row justify-center md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={logo} alt="logo image" />
      </div>
     
      <div className="md:w-1/3 max-w-sm -mt-8">
        <div className="text-center md:text-left">
          <label className="mr-1 text-xl text-deepPlum">Sign in </label>
        </div>
        <input
          name="email"
          value={formData.email}
          onChange={changeHandler}
          className="text-sm w-full px-4 py-2 mt-12 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={formData.password}
          onChange={changeHandler}
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-deepPlum hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            onClick={signin}
            className="mt-4 bg-deepPlum hover:bg-roseGold px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{' '}
          <a className="text-roseGold hover:underline hover:underline-offset-4" href="/signup">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
