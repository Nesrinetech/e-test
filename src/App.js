import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Browse from './Components/Browse/Browse';
<<<<<<< HEAD
import Product from './Pages/Product';
import Cart from './Pages/Cart';
=======
 
>>>>>>> 9cb35869440e4eef5fd8269e7ed709fe51cd4049
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='/Shop' element={<Shop />}/>
        <Route path='/Popular' element={<Popular />}/>
        <Route path='/Product' element={<Product />}/>
        <Route path='/product/:productId' element={<Product />}/>
        <Route path='/Cart' element={<Cart />}/>
        
=======
>>>>>>> 9cb35869440e4eef5fd8269e7ed709fe51cd4049
        <Route path='/Browse' element={<Browse />}/>
 

          
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
