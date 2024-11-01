import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
 
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
      <h3 className="text-2xl font-bold mb-4 text-deepPlum">Join Our Newsletter</h3>
      <p className="mb-6 text-md">
        Stay updated with the latest collections and offers. Enter your email below to join our newsletter!
      </p>
      <form  className="flex flex-col sm:flex-row justify-center items-center">
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
          className="bg-deepPlum  text-white py-3 px-8 rounded-full shadow-md transition"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="mt-4 text-md text-red-500">{message}</p>}
    </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="mb-4">
            <h4 className="text-3xl font-bold font-mono text-white mb-4">Threshold</h4> 
          </div>
          <div className="flex space-x-4 text-xl text-deepPlum">
            <a href="#" aria-label="Facebook"  className="hover:text-roseGold transition">
              <FaFacebookF />
            </a>
            <a href="#"  aria-label="Instagram" className="hover:text-roseGold transition">
              <FaInstagram />
            </a>
            <a href="#"  aria-label="Email" className="hover:text-roseGold transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="sm:text-center sm:mx-auto text-center">
          <h4 className="font-bold mb-4 text-white text-center">About Us</h4>
          <ul>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/">Our Story</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/contact">FAQ</a>
            </li>
          </ul>
        </div>
        <div className='sm:text-center sm:mx-auto text-center'>
          <h4 className="font-bold mb-4 text-white text-center">Account</h4>
          <ul>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/profile">My Account</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="#">Order History</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/shop">Wishlist</a>
            </li>
          </ul>
        </div>
        <div className='sm:text-center sm:mx-auto text-center'>
          <h4 className="font-bold mb-4 text-white text-center">Categories</h4>
          <ul>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/#">Men Gear</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="#">Women Gear</a>
            </li>
            <li className="mb-2 text-deepPlum hover:text-roseGold transition">
              <a href="/">More</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 text-center text-gray-500">
        © 2024 <span className='text-white'>Threshold</span>  | Made With ❤️ In Dz.
      </div>
    </footer>
  )
}
export default Footer