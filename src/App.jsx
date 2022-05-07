import React from 'react'
import data from './data.json';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

const App = () => {

  return (
    <>
      <Header />
      <Cards cards={data.cards}/>
    </>
  )
}

export default App
