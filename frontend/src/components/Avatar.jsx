import './styles/Avatar.css'
import { useRef, useState, useEffect } from 'react'

function Avatar({ src, fullName, firstName }) {
  const avatarInitial = firstName.toUpperCase()[0]
  const [randomHueRotate, setRandomHueRotate] = useState();
  useEffect(() => {
    const savedAvatarBgColor = localStorage.getItem(fullName)
    if (savedAvatarBgColor) {
      setRandomHueRotate(savedAvatarBgColor)
    } else {
      const generateRandomHue = () => { Math.floor(Math.random() * 200) * 2 }
      setRandomHueRotate(generateRandomHue())
      localStorage.setItem(fullName, Math.floor(Math.random() * 200) * 2)
    }
  }, [])
  return(
    <div className="avatar" style={{ backgroundColor: 'lightblue', filter: `hue-rotate(${randomHueRotate}deg)` }}>
      { 
        <p style={{ color: 'lightblue', filter: 'saturate(100) brightness(50%)' }}>{avatarInitial}</p>
      }
    </div>
  )
}

export default Avatar