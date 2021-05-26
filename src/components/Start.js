import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/components/start.css"

const Start = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="start-container">
        <div className="form-description">
          <h3>Znajdź oferty hoteli, domów i wielu innych obiektów...</h3>
          <p>Od przytulnych domków wiejskich po modne apartamenty w mieście</p>
        </div>
        <div className="form-container">
          <div className='form-wrapper'>
           <span className='place-form'>
           <StaticImage
              src="../assets/images/placeIcon.png"
              alt="place-icon"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-logo"
            />
            <input className='place-input' placeholder="Dokąd się wybierasz?"/>
           </span>
           <span className='calendar-form'>
           <StaticImage
              src="../assets/images/calendarIcon.png"
              alt="calendar-icon"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-logo"
            />
            <div className='calendar_input-group'>
            <input placeholder="zameldowanie"/>
            <input placeholder="wymeldowanie"/>
            </div>
           </span>
           <span className='person-form'>
           <StaticImage
              src="../assets/images/personIcon.png"
              alt="person-icon"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-logo"
            />
            <div className='person_input-group'>
            <input placeholder="2 dorosłych"/>
            <input placeholder="0 dzieci"/>
            <input placeholder="1 pokój"/>
            </div>
            <StaticImage
              src="../assets/images/arrowsIcon.png"
              alt="person-icon"
              layout="fixed"
              placeholder="tracedSVG"
              className="booking-logo"
            />
           </span>
           <div className='form-btn'>
             <button>Szukaj</button>
           </div>
          </div>
          <div className="business-checkbox">
            <input id="business" type="checkbox" />
            <label htmlFor="business">Podróżuję służbowo</label>
          </div>
        </div>
      </div>
  )
}

export default Start
