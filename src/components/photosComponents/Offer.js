import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import "../../assets/styles/components/photosComponents/offer.css"

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});

  :hover {
    box-shadow: inset 0 20px 60px -20px rgba(0, 0, 0, 0.8);
  }
`

const Offer = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            name
            quantity
            category
            image {
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="offer_up-container">
      <div className="offer-wrapper">
        <div className="offer_up-wrapper">
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'offer-up').map((item, index)=>(
                <ImageElement
                  key={index}
                  className="offer-up_element"
                  background={item.frontmatter.image.childImageSharp.fluid.src}
                >
                  <div>
                    <h2 className="offer-header">{item.frontmatter.name}</h2>
                    <p className="offer-objects">{item.frontmatter.quantity}</p>
                  </div>
                  <div className="price-wrapper">
                    <p>Średnia cena 429zł</p>
                  </div>
                </ImageElement>
              )
            )}
        </div>
        <div className="offer_down-wrapper">
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'offer-down').map((item, index)=>(
                <ImageElement
                key={index}
                  className="offer-down_element"
                  background={item.frontmatter.image.childImageSharp.fluid.src}
                >
                  <div>
                    <h2 className="offer-header">{item.frontmatter.name}</h2>
                    <p className="offer-objects">{item.frontmatter.quantity}</p>
                  </div>
                  <div className="price-wrapper">
                    <p>Średnia cena 429zł</p>
                  </div>
                </ImageElement>
              )
            )}
        </div>
      </div>
    </div>
  )
}
export default Offer
