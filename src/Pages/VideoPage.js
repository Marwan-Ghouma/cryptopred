import React from 'react'
import Card from '../Components/Card'

const VidePage = () => {

  const info = [
   {title:"test1",img:"https://bitcoin.org/img/icons/opengraph.png?1657703267",url:'/'},
   {title:"test2",img:"https://bitcoin.org/img/icons/opengraph.png?1657703267",url:'/'},
   {title:"test3",img:"https://bitcoin.org/img/icons/opengraph.png?1657703267",url:'/'},
   {title:"test4",img:"https://bitcoin.org/img/icons/opengraph.png?1657703267",url:'/'}
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