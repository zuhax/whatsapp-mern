import { useState, useEffect } from 'react'
import './styles/HomePageHeader.css'
import CameraIcon from '../assets/camera-icon.png'
import SearchIcon from '../assets/search-icon [71B08B4].png'
import DropdownMenu from '../components/DropdownMenu.jsx'

function HomePageHeader({ activeNav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  function cameraAlert() {
    alert("Kamera tidak tersedia.")
  }
  return (
    <div className="landing-page-header">
      {menuOpen && ( <DropdownMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonList={["Kontak baru", "Perangkat tertaut", "Baca semua", "Pengaturan" ]}/> )}
      <header>
        <div className="top">
          { activeNav === 'chat' && (
            <>
              <h2 className="left-side app-name" >MrthinusApp</h2>
              <div className="right-side">
                <button className="camera" onClick={cameraAlert}><img src={CameraIcon} alt="" style={{ width: "28px", height: "28px" }} /></button>
                <button className="more-options" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
              </div>
            </>
          )}
          { activeNav === 'pembaruan' && (
            <>
              <h2 className="left-side">Pembaruan</h2>
              <div className="right-side">
                <button className="camera" onClick={ () => alert('soon') }> <img src={SearchIcon} alt="" style={{ width: '28px', height: '28px' }} /></button>
                <button className="more-options" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
              </div>
            </>
          )}
        </div>
        { activeNav === 'chat' && (
          <input className="search" type="text" placeholder="Cari pesan atau kontak" />
        )}
      </header>
    </div>
  )
}

export default HomePageHeader