import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';

function App() {
 
  return (
    <>
    <Headers />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetails />}/>
    </Routes>     
    <Toaster />
    </>
  )
}

export default App
