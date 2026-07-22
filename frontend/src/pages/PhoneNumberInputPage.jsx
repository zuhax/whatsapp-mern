import './styles/PhoneNumberInputPage.css'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'
import BackButton from '../assets/back-button [B061DD2].png'

function PhoneNumberInputPage({ activePage, setActivePage }) {
  const HandleBackButtonClick = () => {
    setActivePage('landing');
  }
  return (
    <div className="phone-number-input-page">
      <header>
        <div className="left-side">
          <button onClick={HandleBackButtonClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
           <img src={BackButton} alt="Back" style={{ width: '32px', height: 'auto', filter: 'saturate(0) brightness(0)' }} /> 
          </button>
        </div>
        <div className="right-side">
          <MoreOptionsButton />
        </div>
      </header>
      <main>
        <h3>Masukkan Nomor Telepon Anda</h3>
        <p>Masukkan nomor telepon Anda untuk memverifikasi akun WhatsApp.</p>
        <form>
          <button></button>
          <div style={{ height: '1px', backgroundColor: 'gray', margin: '8px 0' }}></div>
          <input type="text" placeholder="Masukkan nomor telepon" />
        </form>
      </main>
    </div>
  );
}

export default PhoneNumberInputPage;