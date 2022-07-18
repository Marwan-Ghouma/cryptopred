import React from 'react'
import  { createContext, useContext, useEffect, useState } from "react";
const Crypto = createContext(); 

const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("TND");
    const [symbol, setSymbol] = useState("D");

  useEffect(() => {
    if (currency === "TND") setSymbol("D");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider  value={{ currency, setCurrency, symbol }}>{children}</Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto);
  };