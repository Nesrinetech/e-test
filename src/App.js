import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Popular from './Components/Popular/Popular';
import Browse from './Components/Browse/Browse';
import Product from './Pages/Product';
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop />}/>
        <Route path='/Popular' element={<Popular />}/>
        <Route path='/Product' element={<Product />}/>
        <Route path='/:productId' element={<Product />}/>
 
        <Route path='/Browse' element={<Browse />}/>
 

          
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
