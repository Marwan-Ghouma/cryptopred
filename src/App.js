import {Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import HomePage from './Pages/HomePage';
import 'react-alice-carousel/lib/alice-carousel.css';
import VidePage from './Pages/VideoPage';
import Live from './Pages/Live';
import Predictions from './Pages/Predictions';
import Path1 from './Pages/tutos/path1';
import Path2 from './Pages/tutos/path2';
import Path3 from './Pages/tutos/path3';
import Path4 from './Pages/tutos/path4';
  
  

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
            <Route path="/path1" element={ <Path1 />} ></Route>
            <Route path="/path2" element={ <Path2 />} ></Route>
            <Route path="/path3" element={ <Path3 />} ></Route>
            <Route path="/path4" element={ <Path4 />} ></Route>     
        </Routes>
       </div>
  
    
    
  );
}

export default App;
