import './index.scss'
import LogoPage from '../../../src/assets/images/logo-d.png'
import { useState, useEffect } from 'react'

const Logo = () => {

  const [logoClass, setLogoClass] = useState('logo-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoClass('logo-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div className='logo-container'>
      <img className={logoClass} src={LogoPage} alt='DLogo'/>
    </div>
  )
}
export default Logo;