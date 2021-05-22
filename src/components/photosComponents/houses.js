import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../assets/styles/components/photosComponents/houses.css"

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});
`

const Houses = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            name
            place
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

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="houses-container">
      <div className="houses_slider-wrapper">
      <h2>Domy, które goście kochają</h2>
        <Slider {...settings}>
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'houses').map((item, index)=>(
                <div key={index} className="house-wrapper">
                  <ImageElement
                    className="image-house"
                    background={
                      item.frontmatter.image.childImageSharp.fluid.src
                    }
                  />
                  <p className='house-name'>{item.frontmatter.name}</p>
                  <p className='house-place'>{item.frontmatter.place}</p>
                  <p className='house-price'>Ceny od 746 zł</p>
                  <div className='house_rating-wrapper'>
                    <div className="house-rating">
                      <p>9,4</p>
                    </div>
                    <p className='rating-text'>Znakomity</p>
                    <p className='rating-opinion'>132 opinii</p>
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  )
}
export default Houses
