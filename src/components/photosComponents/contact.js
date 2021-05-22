import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../assets/styles/components/photosComponents/contact.css"

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            name
            country
            topic
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
    <div className="contact-container">
      <div className="contact-wrapper">
      <h2>Nawiąż kontakt z innymi podróżującymi</h2>
      <div className="contact_categories-wrapper">
      <Slider {...settings}>
      {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'contact').map((item, index)=>(
                <div key={index} className="contact_category-wrapper">
                  <ImageElement
                    className="image-category"
                    background={
                      item.frontmatter.image.childImageSharp.fluid.src
                    }
                  />
                  <p className='category-name'>{item.frontmatter.name}</p>
                  <p className='cateogry-topic'>{item.frontmatter.topic}</p>
                  <p className='category-quantity'>559 436 podróżujących</p>
                </div>
              )
           )}
      </Slider>
      </div>
      <div className='category_slider-wrapper'>
      <Slider {...settings}>
          {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'contact-slide').map((item, index)=>(
                <div key={index} className="category-slide">
                  <ImageElement
                    className="image-contact"
                    background={
                      item.frontmatter.image.childImageSharp.fluid.src
                    }
                  />
                  <Link to="/">1 944 obiektów na wynajem sezonowy</Link>
                  <Link to="/">1 868 apartamentów</Link>
                  <Link to="/">156 hoteli apartamentowych</Link>
                  <Link to="/">77 hosteli</Link>
                </div>
              )
           )}
        </Slider>
      </div>
      </div>
    </div>
  )
}
export default Contact
