import React from 'react'
import axios from 'axios'
import './cats.scss'

const catApi = process.env.REACT_APP_APIURL
console.log(catApi)

export default class Cats extends React.Component {
  state = {
    catCards: []
  }

  componentDidMount () {
    axios.get(catApi)
      .then(res => {
        const catCards = res.data
        this.setState({ catCards })
      })
  }

  render () {
    return (
      this.state.catCards
        .map(cat =>
          <div key="cat-card" id="cat-card" className="container" style={{ backgroundImage: `url(${cat.image.url})` }}>

            <div className="container-info">
              <img src="child-solid.svg" alt="icon of a child"></img>
              <b>{cat.child_friendly}</b>
              <img src="dog-solid.svg" alt="icon of a dog" className="dog"></img>
              <b>{cat.dog_friendly}</b>
              <img src="person-solid.svg" alt="icon of a person"></img>
              <b>{cat.stranger_friendly}</b>
            </div>

            <div className='container-profile'>
              <div id="cat_name" className="container-profile-text">
                <h2>{cat.cat_name}</h2>
                <p>Total friendlyness score: <b>{cat.total_score}</b></p>
                <a href={cat.wiki_link}>
                  <b>More Info</b>
                </a>
              </div>
            </div>

          </div>
        )
    )
  }
}
