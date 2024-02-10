import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Sign_in/Signin';
import Signup from './pages/Sign_up/Signup';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/registration' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;