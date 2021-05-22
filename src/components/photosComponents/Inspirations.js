import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import "../../assets/styles/components/photosComponents/inspirations.css"

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});

  :hover {
    :after {
      transform: scale(1.05);
    }
  }
`

const Inspirations = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            name
            description
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
    <div className="inspiration_up-container">
      <div className="inspiration-wrapper">
        <h2>Poszukaj inspiracji na kolejną podróż</h2>
        <div className="inspiration_up-wrapper">
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'inspiration-up').map((item, index)=>(
                <ImageElement
                  key={index}
                  className="inspiration-up_element"
                  background={item.frontmatter.image.childImageSharp.fluid.src}
                >
                  <div>
                    <h3 className="inspiration-header">
                      {item.frontmatter.name}
                    </h3>
                    <p className="inspiration-description">
                      {item.frontmatter.description}
                    </p>
                  </div>
                </ImageElement>
              )
            )}
        </div>
        <div className="inspiration_down-wrapper">
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'inspiration-down').map((item, index)=>(
                <ImageElement
                  key={index}
                  className="inspiration-down_element"
                  background={item.frontmatter.image.childImageSharp.fluid.src}
                >
                  <div>
                    <h3 className="inspiration-header">
                      {item.frontmatter.name}
                    </h3>
                    <p className="inspiration-description">
                      {item.frontmatter.description}
                    </p>
                  </div>
                </ImageElement>
              )
            )}
        </div>
      </div>
    </div>
  )
}
export default Inspirations
