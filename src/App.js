import './App.scss'
import Cats from './components/cats/catsComponent'
import React from 'react'

function App () {
  return (
    <div className="App">
      <div className="headertext">
        <h1><span>The top 5 most friendly cats</span></h1>
        <p>...excluding the one that lives in my house</p>
      </div>
      <Cats/>
    </div>
  )
}

export default App
