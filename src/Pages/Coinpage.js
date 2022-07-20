import React from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Coininfo from '../Components/CoinInfo';
import Typography from '@mui/material/Typography'; 



const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();


  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

 

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
   
    <div className='container'>
      <div className='sidebar'>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant='h3'>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className='desc' >
        
          {coin?.description.en.split(". ")[0]}
        </Typography>
        <div className='marketdata'>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='thead'>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='thead'>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='thead'>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              
            </Typography>
          </span>
        </div>
      </div>
      <Coininfo coin={coin}/>
    </div>
  )
}


export default Coinpage