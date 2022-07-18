import React from 'react'
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { CryptoState } from "../CryptoContext";




const Header = () => {

  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  return (

    
      <AppBar color="transparent" position="static">
        <Container>
        <Toolbar>
            <Typography
              align='left'
              
              onClick={() => navigate(`/`)}
              className="header">
                 <h2>Crypto Predictor</h2>
                 </Typography>

               <Select  className='select'
               value={currency}
               onChange={(e) => setCurrency(e.target.value)}
                >            
                  
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"TND"}>TND</MenuItem>
                  
               </Select>
            
            </Toolbar>
    </Container>
    </AppBar>
   
  )
}

export default Header