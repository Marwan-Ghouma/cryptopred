import {Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import HomePage from './Pages/HomePage';

  
  

function App() {
 

  return (

  
 
      <div className='bg'>
        <Header/>
        <Routes>
            <Route path="/" element={ <HomePage />} ></Route>
            <Route path="/coins/:id" element={ <Coinpage />} ></Route>            
        </Routes>
       </div>
  
    
    
  );
}

export default App;
