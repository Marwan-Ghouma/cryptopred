import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { CircularProgress } from '@mui/material';
import { Line } from "react-chartjs-2"; 

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );



const Predictions = () => {

  const [pred, setPred] = useState();
  const [flag,setflag] = useState(false);

  const fetchPred = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/`);
        setflag(true)
        setPred(data);
        
      };

      console.log(pred)

      useEffect(() => {
        fetchPred();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


  return (
    <div className='pred'>

{
        !pred | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
           <Line
              data={{
                labels:[] ,

                datasets: [
                  {
                    data: pred,
                    label: `BTC prices for next 30 days  `,
                    borderColor: "#EEBC1D",
                    
                    
                  },
                ],
              }}
              options={{
                
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              />                   
         </>)
        }
      

    </div>
  )
}

export default Predictions