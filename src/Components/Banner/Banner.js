import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Carousel from './Carousel';
const Banner = () => {
  return (
    <div className='banner'>
        <Container className='container' >
          <div className='tagline'>
            <Typography className='typo'>
               <h1>CRYPTOPRED</h1> 
            </Typography>

            <Typography className='typo2'>
            
              Get all the Info regarding your favorite Crypto Currency
            </Typography>
          </div>
        <Carousel/>
        </Container>
    </div>
  )
}

export default Banner