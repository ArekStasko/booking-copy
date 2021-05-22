import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick";
import Offer from './photosComponents/Offer'
import Inspirations from './photosComponents/Inspirations'
import Houses from './photosComponents/houses'
import Contact from './photosComponents/contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/components/mainSection.css'

const ImageElement = styled.div`
 background-image: url(${({ background }) => background});
`


const MainSection = () => {

  const data = useStaticQuery(graphql`
  {
    allMdx {
      nodes {
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

    const settings = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]}

      return (
        <div className='main_section-container'>
          <div className='slider-wrapper'>
            <h2>Szukaj według rodzaju obiektu</h2>
            <Slider {...settings}>
            {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'objects').map((item, index)=>(
                <div key={index} className='object-wrapper'>
                  <ImageElement className='image-object' background={item.frontmatter.image.childImageSharp.fluid.src} />  
                  <p>{item.frontmatter.name}</p>
                  <p>{item.frontmatter.quantity}</p>
                  </div>
              )
            )}
             </Slider>
          </div>
          <div className='slider-wrapper'>
            <h3 className='poland-header'>Polska - odkryj to miejsce</h3>
            <p className='poland-description'>Te popularne miejsca mają wiele do zaoferowania</p>
            <Slider {...settings}>
            {data.allMdx.nodes.filter(item=> item.frontmatter.category === 'objects').map((item, index)=>(
                  <div key={index} className='object-wrapper'>
                  <ImageElement className='image-object' background={item.frontmatter.image.childImageSharp.fluid.src} />  
                  <p>{item.frontmatter.name}</p>
                  <p>{item.frontmatter.quantity}</p>
                  </div>
                )
            )}
             </Slider>
          </div>
          <Offer/>
          <Inspirations/>
          <Houses/>
          <Contact/>
        </div>
      );
}
export default MainSection