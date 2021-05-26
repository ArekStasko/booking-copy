import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import data from "../data/favorites/data.json"
import "../assets/styles/components/favoritesSection.css"


const Btn = styled.button`
background-color: ${({active})=> active ? '#0071c2' : '#ffff'};
color: ${({active})=> active ? '#ffff' : '#838383'};
`
const types = ["Regiony", "Miasta", "Miejsca"]

const FavoritesSection = () => {
  const [category, setCategory] = useState("Regiony")
  const [active, setActive] = useState(types[0])

  return (
    <div className="favorites-container">
      <div className="favorites-wrapper">
      <div className='favorites-header'>
      <h2>Nasze ulubione miejsca</h2>
      </div>
        <div className="favorites_categories-wrapper">
          {types.map(item => (
            <Btn 
            key={item}
            onClick={() => {setCategory(item); setActive(item)}}
            active={active === item}
            >
                {item}
            </Btn>
          ))}
        </div>
        <div className="favorites_elements-wrapper">
          {category === "Regiony"
            ? data.data[0].Regiony.map(i => {
                return (
                  <div className="favorite-element" key={i.objects}>
                    <Link to="/">{i.place}</Link>
                    <p>{i.objects}</p>
                  </div>
                )
              })
            : category === "Miasta"
            ? data.data[0].Miasta.map(i => {
                return (
                  <div className="favorite-element" key={i.objects}>
                    <Link to="/">{i.place}</Link>
                    <p>{i.objects}</p>
                  </div>
                )
              })
            : data.data[0].Miejsca.map(i => {
                return (
                  <div className="favorite-element" key={i.objects}>
                    <Link to="/">{i.place}</Link>
                    <p>{i.objects}</p>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default FavoritesSection
