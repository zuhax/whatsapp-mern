import './styles/PhoneNumberInputPage.css'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'

function PhoneNumberInputPage() {
  return (
    <div className="phone-number-input-page">
      <header>
        <div className="left-side">
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
        </form>
      </main>
    </div>
  );
}

export default PhoneNumberInputPage;