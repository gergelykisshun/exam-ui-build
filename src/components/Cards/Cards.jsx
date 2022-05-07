import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = ({cards}) => {
  return (
    <section className='main-container'>
      <section className='cards-container'>
          {cards.map((card, i) => <Card card={card} num={i + 1}/>)}
      </section>
    </section>
  )
}

export default Cards