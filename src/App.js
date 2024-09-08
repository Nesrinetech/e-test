import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Browse from './Components/Browse/Browse';
 
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Browse' element={<Browse />}/>
 

          
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
