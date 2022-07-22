import {Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import HomePage from './Pages/HomePage';
import 'react-alice-carousel/lib/alice-carousel.css';
import VidePage from './Pages/VideoPage';
import Live from './Pages/Live';
import Predictions from './Pages/Predictions';
  
  

function App() {
 

  return (

  
 
      <div className='bg'>
        <Header/>
        <Routes>
            <Route path="/" element={ <HomePage />} ></Route>
            <Route path="/coins/:id" element={ <Coinpage />} ></Route> 
            <Route path="/tutos" element={ <VidePage />} ></Route>  
            <Route path="/live" element={ <Live />} ></Route>     
            <Route path="/predictions" element={ <Predictions />} ></Route>       
        </Routes>
       </div>
  
    
    
  );
}

export default App;
