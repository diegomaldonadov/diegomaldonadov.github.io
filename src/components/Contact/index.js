import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const sendEmailHandler = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_6pprqtl',
        'template_v4hwurf',
        refForm.current,
        'bnbXfSNHBJMFhCnPI'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Feel free to get in touch! I'm always looking for new and exciting
            projects to work on, you can contact me through the form on this
            page, or by emailing me directly. I'll get back to you as soon as
            possible. Thank you for taking the time to view my portfolio!
          </p>
          <div className="contact-form ">
            <form ref={refForm} onSubmit={sendEmailHandler}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="reply_to"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Diego Maldonado
        <br />
        Monterrey, Nuevo León,
        <br />
        Mexico.
        <br />
        <span>diegoomaldonado95@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[25.67093, -100.30999]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[25.67093, -100.30999]}>
            <Popup>
              <h2>This is the city where I live!</h2>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
