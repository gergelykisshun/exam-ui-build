import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = ({cards}) => {
  return (
    <section className='cards-container'>
        {cards.map(card => <Card card={card}/>)}
    </section>
  )
}

export default Cards