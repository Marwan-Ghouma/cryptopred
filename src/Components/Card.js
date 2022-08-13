import React from 'react'



const Card = (props) => {
  return (
    <div className='path-items'>
        
        <div className='path-items-container'>
        
            <a href={props.url} className='path-items-container' >
                <img class="path-icon" src={props.img} alt={props.title} />
                <div className='path-label'>Path</div>
                <div className='path-title'>{props.title}</div>
                <div > discover here  </div>
            </a>
        </div>
    </div>
  )
}


export default Card