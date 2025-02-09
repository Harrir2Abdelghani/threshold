import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.intentlead.com/js/pIOM6PJ3iY";
    script.async = true;
    document.getElementById('intentlead-script-container')?.appendChild(script);
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-bold mb-4 text-deepPlum">Join Our Newsletter</h3>
        <p className="mb-6 text-md">
          Stay updated with the latest collections and offers. Enter your email below to join our newsletter!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 p-3 rounded-full text-black mb-4 sm:mb-0 sm:mr-4"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-deepPlum text-white py-3 px-8 rounded-full shadow-md transition"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className="mt-4 text-md text-red-500">{message}</p>}
      </div>
      <div id="intentlead-script-container" style={{ width: '100%' }}></div>
      <div className="mt-14 text-center text-gray-500">
        © 2024 <span className='text-white'>Threshold</span>  | Made With ❤️ In Dz.
      </div>
    </footer>
  );
};

export default Footer;
