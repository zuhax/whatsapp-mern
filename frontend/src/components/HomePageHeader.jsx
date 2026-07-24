import { useState, useEffect } from 'react'
import './styles/HomePageHeader.css'

import CameraIcon from '../assets/camera-icon.png'
import SearchIcon from '../assets/search-icon [71B08B4].png'
import BackIcon from '../assets/back-button [B061DD2].png'

import DropdownMenu from '../components/DropdownMenu.jsx'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'

function HomePageHeader({
  activeNav,
  selectedChatId,
  setSelectedChatId
}) {
  function cameraAlert() {
    alert("Kamera tidak tersedia.")
  }
  return (
    
    <div className="landing-page-header">
      <header>
        <div className="top">
          { activeNav === 'chat' && (
            <>
              { selectedChatId.length === 0 ? (
                <>
                  <h2 className="left-side app-name">MrthinusApp</h2>
                  <div className="right-side">
                    <button className="camera" onClick={cameraAlert}><img src={CameraIcon} alt="" style={{ width: "28px", height: "28px" }} /></button>
                    <MoreOptionsButton buttonList={[
                      ["Grup baru", () => {}],
                      ["Komunitas baru", () => {}],
                      ["Baca semua", () => {}],
                      ["Pengaturan", () => {}],
                    ]} />
                  </div>
                </>
                ):(
                  <div className="selecting-mode">
                    <div className="left-side">
                      <button onClick={() => setSelectedChatId([])}><img src={BackIcon} style={{ width: "32px", height: "auto", transform: "translateY(1px)", filter: "brightness(0)" }}alt="" /></button>
                      <p>{selectedChatId.length}</p>
                    </div>
                    <div className="right-side">
                      <MoreOptionsButton buttonList={[
                        ["Tandai belum dibaca", () => {}],
                        ["Pilih semua", () => {}],
                        ["Bersihkan obrolan", () => {}],
                      ]} />
                    </div>
                  </div>
                )
              }
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
          { activeNav === 'komunitas' && (
            <>
              <h2 className="left-side">Komunitas</h2>
              <div className="right-side">
                <button className="more-options" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
              </div>
            </>
          )}
          { activeNav === 'panggilan' && (
            <>
              <h2 className="left-side">Panggilan</h2>
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