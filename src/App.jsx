import React from 'react'
import data from './data.json';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

const App = () => {

  console.log(data.cards);

  return (
    <>
      <Header />
      <Cards />
    </>
  )
}

export default App
