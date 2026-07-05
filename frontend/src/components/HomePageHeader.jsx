import { useState, useEffect } from 'react'
import './styles/HomePageHeader.css'

function HomePageHeader({ activeNav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  function cameraAlert() {
    alert("Kamera tidak tersedia.")
  }
  return (
    <div className="landing-page-header">
      {menuOpen && (
        <div>
          <div className="dropdown-menu">
            <button>Kontak baru</button>
            <button>Perangkat tertaut</button>
            <button>Baca semua</button>
            <button>Pengaturan</button>
          </div>
          <div className="transparent-layer" onClick={() => setMenuOpen(!menuOpen)}></div>
        </div>
      )}
      <header>
        <div className="top">
          { activeNav === 'chat' && (
            <>
              <h2 className="left-side app-name">WhatsApp</h2>
              <div className="right-side">
                <button className="camera" onClick={cameraAlert}>📷</button>
                <button className="more-options" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
              </div>
            </>
          )}
          { activeNav === 'pembaruan' && (
            <>
              <h2 className="left-side">Pembaruan</h2>
              <div className="right-side">
                <button className="camera" onClick={ () => alert('soon') }>🔎</button>
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