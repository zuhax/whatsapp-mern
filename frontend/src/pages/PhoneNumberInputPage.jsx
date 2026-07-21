import './styles/PhoneNumberInputPage.css'
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'

function PhoneNumberInputPage() {
  return (
    <div className="phone-number-input-page">
      <header>
        <MoreOptionsButton />
      </header>
      <main>
        <h3>Masukkan Nomor Telepon Anda</h3>
      </main>
    </div>
  );
}

export default PhoneNumberInputPage;