/* eslint react/prop-types: 0 */
import * as React from 'react'

export const CatCard = ({ cat }) => (

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
