import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Link } from "gatsby"
import "../assets/styles/components/navbar.css"

const NavbarWrapper = styled.div`
 @media (max-width: 768px) {
    display: ${({nav})=> nav ? 'none' : 'flex'};
  }
`

const NavbarBurger = styled.div`
display: none;

 @media (max-width: 768px) {
    height: 40px;
    width: 50px;
    display: flex;
    flex-direction: column;
    z-index: 2;
  
    div{
      width: 40px;
      height: 3px;
      margin: 5px;
      border-radius: 5px;
      background-color: #ffff;
    }
    
  }
`

const CoronaBaner = styled.div`
height: ${({show})=> show ? 60 : 200 }px;
`

const ArrowIcon = styled.div`
transform: rotate(${({show})=> show ? 0 : 180 }deg);
`

const Navbar = () => {
const [show, setShow] = useState(true)
const [nav, setNav] = useState(true)

  return (
    <>
      <div className="navbar-container">
      <StaticImage
              src="../assets/images/booking-logo.png"
              alt="booking-mobile_logo"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-mobile_logo"
            />
      <NavbarBurger onClick={()=>setNav(!nav)}>
        <div></div>
        <div></div>
        <div></div>
      </NavbarBurger>
        <NavbarWrapper nav={nav} className="navbar-wrapper">
          <div className="info-wrapper">
            <StaticImage
              src="../assets/images/booking-logo.png"
              alt="booking-logo"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-logo"
            />
            <div className="info-buttons">
              <span className="curr-btn">PLN</span>
              <div className="flag-btn"></div>
              <StaticImage
                src="../assets/images/question-mark.png"
                alt="question-mark"
                className="ask-btn"
                placeholder="tracedSVG"
              />
              <button className="share-btn">Udostępnij obiekt</button>
              <button className="log-btn">Zarejestruj się</button>
              <button className="log-btn">Zaloguj się</button>
            </div>
          </div>
          <div className="categories-wrapper">
            <div className="category">
              <StaticImage
                src="../assets/images/bed-icon.png"
                alt="bed-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Pobyty</p>
            </div>
            <div className="category">
              <StaticImage
                src="../assets/images/plane-icon.png"
                alt="plane-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Loty</p>
            </div>
            <div className="category">
              <StaticImage
                src="../assets/images/car-icon.png"
                alt="car-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Wynajem samochodów</p>
            </div>
            <div className="category">
              <StaticImage
                src="../assets/images/atractions-icon.png"
                alt="atractions-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Atrakcje</p>
            </div>
            <div className="category">
              <StaticImage
                src="../assets/images/taxi-icon.png"
                alt="taxi-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Taksówki lotniskowe</p>
            </div>
          </div>
        </NavbarWrapper>
      </div>
      <CoronaBaner show={show} className="coronavirus-info">
        <div className="non-active_container">
          <div className="non-active_info">
            <div className="non-active_wrapper">
              <StaticImage
                src="../assets/images/info-icon.png"
                alt="info-icon"
                layout="fixed"
                placeholder="tracedSVG"
              />
              <p>Koronawirus (COVID-19) - wsparcie</p>
            </div>
            <ArrowIcon onClick={()=>setShow(!show)} show={show} className="info-btn">
              <StaticImage
                src="../assets/images/arrow-icon.png"
                alt="arrow-icon"
                layout="constrained"
                placeholder="tracedSVG"
                width={20}
                height={20}
              />
            </ArrowIcon>
          </div>
        </div>
{
    show ? (
        <>
        </>
    ) : (
        <div className="coronavirus-description">
        <p>
          Sprawdź ograniczenia dotyczące podróżowania. Podróżowanie może być
          dozwolone tylko w określonych celach, a podróżowanie zwłaszcza w
          celach turystycznych może nie być dozwolone.
        </p>
        <Link to='/'>Dowiedz się więcej</Link>
      </div>
    )
}
      </CoronaBaner>
    </>
  )
}

export default Navbar
