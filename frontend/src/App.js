import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import UserShopPage from './Pages/UserShopPage';
import Profile from './Pages/Profile';
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path='/shop' element={<ProtectedRoute element={<UserShopPage />} />} />
          <Route path='/profile' element={<ProtectedRoute element={<Profile />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
