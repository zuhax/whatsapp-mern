import { useState } from 'react'
import './styles/LandingPage.css'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'
import PhoneNumberInputPage from './PhoneNumberInputPage.jsx'

function LandingPage() {
    const [activePage, setActivePage] = useState('landing');
  return (
    <>
        { activePage === 'verification' && (<PhoneNumberInputPage />) }
        {
            activePage === 'landing' && (
            <div className="landing-page">
                <header>
                    <div className="left-side"></div>
                    <div className="right-side">
                        <MoreOptionsButton activePage={activePage} setActivePage={setActivePage} />
                    </div>
                </header>
                <main>
                    <div></div>
                    <div className="content"></div>
                    <h3>Selamat datang di WhatsApp</h3>
                    <p className="privacy-policy">Silakan baca <span style={{ color: 'green' }}>Kebijakan Privasi</span> kami. Ketuk "Setuju dan lanjutkan" untuk menerima <span style={{ color: 'green' }}>Ketentuan Layanan</span> kami.</p>
                    <button onClick={() => setActivePage('verification')}>Setuju dan lanjutkan</button>
                </main>
            </div>
            )
        }
     
    </>
  );
}

export default LandingPage;