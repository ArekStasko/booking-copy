import React, {useState} from "react"
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import "../assets/styles/components/start.css"

const Start = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="start-container">
      <div className="form-wrapper">
        <div className="form-description">
          <h2>Znajdź oferty hoteli, domów i wielu innych obiektów...</h2>
          <p>Od przytulnych domków wiejskich po modne apartamenty w mieście</p>
        </div>

        <div className="form-container">
          <form>
            <input className="form-place" placeholder="Dokąd się wybierasz?" />
            <DateRangePicker
              onChange={onChange}
              value={value}
              className="form-time"
            />      
            <input
              className="form-people"
              placeholder="2 dorosłych 0 dzieci 1 pokój"
            />
            <button className="form-btn">Szukaj</button>
          </form>
          <div className="business-checkbox">
            <input id="business" type="checkbox" />
            <label htmlFor="business">Podróżuję służbowo</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
