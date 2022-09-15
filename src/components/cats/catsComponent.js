import React from 'react'
import axios from 'axios'
import './cats.scss'
import { CatCard } from './catcard'

const catApi = process.env.REACT_APP_APIURL

export const Cats = () => {
  const [catCards, setCatCards] = React.useState([])

  React.useEffect(() => {
    axios.get(catApi)
      .then(res => {
        const catCards = res.data
        setCatCards(catCards)
      })
  }, [])

  return catCards.map(cat => <CatCard cat={cat} key={cat.cat_name} />)
}

export default Cats
