import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/styles/components/discoverSection.css"

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});
`

const Btn = styled.button`
  background-color: ${({ active }) => (active ? "#0071c2" : "#838383")};
`

const DiscoverSection = () => {

   const data = useStaticQuery(graphql`
{
    allDiscoverJson {
        edges {
          node {
            discover {
              country
              description
              image{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
}
`)

  const [category, setCategory] = useState(0)
  const [active, setActive] = useState(0)

  return (
    <div className="discover-container">
      <div className="discover-wrapper">
        <h2>Odkrywaj</h2>
        <div className="discover_categories-wrapper">
        {data.allDiscoverJson.edges[0].node.discover.map((item, index) => (
            <Btn
              key={index}
              onClick={() => {
                setCategory(index)
                setActive(index)
              }}
              active={active === index}
            >
              {index + 1}
            </Btn>
          ))}
          <Link to='/'>Więcej Krajów</Link>
        </div>
        <div className="discover_elements-wrapper">
        {data.allDiscoverJson.edges[0].node.discover[category].map((item, index) => (
            <div className="discover-element" key={index}>
              <ImageElement 
              background={item.image.childImageSharp.fluid.src}
              className='discover-image'
              >
             
                <div className='discover-description'>
                  <p>{item.description}</p>
                </div>
              </ImageElement>
              <Link to="/">{item.country}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection