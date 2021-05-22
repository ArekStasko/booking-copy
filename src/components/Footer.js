import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/components/footer.css"

const shareLinks = ['Wersja na telefon','Twoje konto','Wprowadzaj zmiany w rezerwacji online','Skontaktuj się z obsługą klienta','Zostań naszym Partnerem Afiliacyjnym','Booking.com dla Biznesu']
const links = [
    "Kraje",
    "Regiony",
    "Miasta",
    "Dzielnice",
    "Lotniska",
    "Hotele",
    "Ciekawe miejsca",
    "Domy",
    "Apartamenty",
    "Ośrodki wypoczynkowe",
    "Wille",
    "Hostele",
    "Obiekty B&B",
    "Pensjonaty",
    "Wyjątkowe miejsca na pobyt",
    "Wszystkie cele podróży",
    "Opinie",
    "Artykuły",
    "Społeczności podróżujących",
    "Oferty sezonowe i wakacyjne",
    "Wypożyczalnia samochodów",
    "Wyszukiwarka lotów",
    "Rezerwacja restauracji",
    "Booking.com dla Biur Podróży",
    "Często zadawane pytania dotyczące koronawirusa (COVID-19)",
    "O Booking.com",
    "Skontaktuj się z obsługą klienta",
    "Centrum pomocy",
    "Careers",
    "Zrównoważony rozwój",
    "Informacje prasowe",
    "Centrum zasobów bezpieczeństwa",
    "Relacje z inwestorami",
    "Ogólne Warunki Handlowe",
    "Rozstrzyganie sporów",
    "Zasady współpracy",
    "Oświadczenie o ochronie prywatności i plikach cookies",
    "Zarządzaj ustawieniami dotyczącymi prywatności",
    "Kontakt dla firm"
]

const Footer = () => {

  return (
    <div className='footer-container'>
        <div className='footer_mail-wrapper'>
         <div className='footer-form'>
          <p className='footer_form-header'>Oszczędzaj czas i pieniądze!</p>
          <p className='footer_form-description'>Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty</p>
          <form>
              <input className='mail-input' type="email" placeholder='Adres mailowy' required/>
              <button className='mail-btn'>Zaprenumeruj</button>
              <div className='check_input-wrapper'>
              <input id='aplication' type='checkbox' />
              <label htmlFor='aplication'>Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!</label>
              </div>
          </form>
         </div>
        </div>
        <div className='footer_share-wrapper'>
        <div className='share_btn-wrapper'>
            <div className='footer_share-btn'>
                <p>Udostępnij obiekt</p>
            </div>
        </div>
        <div className='share_btn-line'></div>
        <div className='share_links-wrapper'>
        {shareLinks.map((item, index)=>(
            <Link key={index} to='/'>{item}</Link>
        ))}
        </div>
        </div>
        <div className='footer_links-wrapper'>
         {links.map((item, index)=>(
             <div key={index}>
             <Link to='/'>{item}</Link>
             </div>
         ))}
        </div>
        <div className='footer_end-container'>
         <Link to='/'>Logowanie do Extranetu</Link>
         <p className='footer-authority'>Prawa autorskie © 1996–2021 Booking.com™. Wszelkie prawa zastrzeżone.</p>
         <div className='booking_holdings-wrapper'>
           <p>Booking.com jest częścią Booking Holdings Inc. – światowego lidera w internetowej branży turystycznej.</p>
           <div className='booking_holdings-logos'>
           <StaticImage
                src="../assets/images/booking-white.png"
                alt="booking-white"
                layout="fixed"
              />
            <StaticImage
                src="../assets/images/priceline.png"
                alt="priceline"
                layout="fixed"
              />
            <StaticImage
                src="../assets/images/kayak.png"
                alt="kayak"
                layout="fixed"
              />
            <StaticImage
                src="../assets/images/agoda.png"
                alt="agoda"
                layout="fixed"
              />
            <StaticImage
                src="../assets/images/rentalcars.png"
                alt="rentalcars"
                layout="fixed"
              />
            <StaticImage
                src="../assets/images/opentable.png"
                alt="opentable"
                layout="fixed"
              />
           </div>
         </div>

        </div>
    </div>
  )
}

export default Footer
