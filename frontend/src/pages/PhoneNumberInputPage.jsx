import { useState } from 'react'

import './styles/PhoneNumberInputPage.css'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'
import BackButton from '../assets/back-button [B061DD2].png'
import config from '../config.js'

import HomePage from './HomePage.jsx'


function PhoneNumberInputPage({ activePage, setActivePage }) {
  
  
  
  const HandleBackButtonClick = () => {
    setActivePage('landing');
  }
  
  const [inputCountryCode, setInputCountryCode] = useState("62")
  const countryCodeData = [
    {
      countryCode: "62",
      countryName: "Indonesia"
    },
    {
      countryCode: "63",
      countryName: "Phillipines"
    },
    {
      countryCode: "60",
      countryName: "Malaysia"
    },
  ]
  
  const matchCountryCode = () => {
    if (!inputCountryCode) {
      return "Pilih negara"
    } else if (countryCodeData.find( data => data.countryCode === inputCountryCode )) {
      return countryCodeData.find( data => data.countryCode === inputCountryCode ).countryName
    } else {
      return "kode negara tidak valid"
    }
  }
  
  const [phoneNumber, setPhoneNumber] = useState("")
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) {
      return numbers;
    }
    if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };
  
  const isPhoneNumberValid = phoneNumber.replace(/\D/g, "").length >= 7;
  
  const [ isDemoMode, setIsDemoMode ] = useState(false);
  
  return (
    <>
      {!isDemoMode && (
        <div className="phone-number-input-page">
          <header>
            <div className="left-side">
              <button onClick={HandleBackButtonClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <img src={BackButton} alt="Back" style={{ width: '32px', height: 'auto', filter: 'saturate(0) brightness(0)' }} /> 
              </button>
            </div>
            <div className="right-side">
              <MoreOptionsButton buttonList={[
                ["Mode demo", () => { setIsDemoMode(true); }],
                ["Batal", () => { }],
              ]} />
            </div>
          </header>
          <main>
            <h3 style={{ color: "rgba(0,0,0,0.6)" }}>Masukkan Nomor Telepon Anda</h3>
            <p style={{ color: "rgba(0,0,0,0.6)" }}>{config.appName} perlu memverifikasi nomor telepon Anda.<br/>Biaya operator mungkin berlaku. <a href="">Berapa nomor telepon saya?</a></p>
            <form>
              <div className="top">
                <button>{matchCountryCode()}</button>
              </div>
              <div className="bottom">
                <div className="left-side-input">
                  <p style={{ opacity: ".5" }}>+</p>
                  <input maxLength={3} inputMode="numeric" value={inputCountryCode} onChange={(e) => setInputCountryCode(e.target.value)} />
                </div>
                <input className="right-side-input" inputMode="numeric" maxLength={14} placeholder="Nomor telepon" onChange={(e) => {
                  setPhoneNumber(formatPhoneNumber(e.target.value)); }}
                  value={phoneNumber}
                  />
              </div>
              <button onClick={() => {alert("Nomor telepon tidak valid")}} style={ !isPhoneNumberValid ? { backgroundColor: "#97a397", color: "#647c64" } : { backgroundColor: "#00c600" }} disabled={!isPhoneNumberValid} className="next-button">Berikutnya</button>
            </form>
          </main>
        </div>
      )}
      {isDemoMode && (
        <HomePage />
      )}
    </>
  );
}

export default PhoneNumberInputPage;