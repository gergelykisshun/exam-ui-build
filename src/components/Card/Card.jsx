import React from 'react'
import './Card.css'

const Card = ({card, num}) => {
  const {title, sub, text} = card;


  return (
    <div className='card'>
      <p className='num-container'>{num}</p>
      <h2 className='title'>{title}</h2>
      <h3 className='sub'>{sub}</h3>
      <p className='text'>{text}</p>
      <button>
        Details
        <i className="material-symbols-outlined">
          arrow_forward
        </i>
      </button>
    </div>
  )
}

export default Card;