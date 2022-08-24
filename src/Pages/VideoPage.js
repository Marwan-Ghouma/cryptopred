import React from 'react'
import Card from '../Components/Card'

const VidePage = () => {

  const info = [
   {title:"Cryptocurrency Trading Platform Binance",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/1200px-Binance_Logo.svg.png",url:'/Path1'},
   {title:"Learn How to Trade Cryptocurrencies",img:"https://bitcoin.org/img/icons/opengraph.png?1657703267",url:'/Path2'},
   {title:"Cryptocurrency Strategies",img:"https://cdn-icons-png.flaticon.com/512/196/196181.png",url:'/Path3'},
   {title:"Risk Management Plan",img:"https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-risk-investing-flaticons-flat-flat-icons.png",url:'/Path4'}
  ]

  const items = info.map(function(item){
    return <Card
     title={item.title}
     img={item.img}
     url={item.url}
     />
  })
  return (
    <div className='block'>
      {items}
      
    </div>
  )
}

export default VidePage