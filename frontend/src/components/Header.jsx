import BackButtonIcon from '../assets/back-button [B061DD2].png' 
import SearchIcon from '../assets/search-icon [71B08B4].png' 
import MoreOptionsButton from '../components/buttons/MoreOptionsButton.jsx'

function Header({ backButton, forPage }) {
  return(
    <header className='header-container' style={{ borderBottom: `${ forPage === 'select-contact' ? '1px solid lightgray' : ''}`, justifyContent: 'space-between', top: 0, position: 'fixed', zIndex: '20', alignItems: 'center', display: 'flex', width: '100%', height: '44px', backgroundColor: '', paddingInline: '4px', paddingBlock: '28px'}}>
      <div className='left-side' style={{ display: 'flex', gap: '8px' }}>
        <button onClick={backButton} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: 'transparent', filter: 'brightness(0)' }}><img style={{ width: 'auto', height: '32px'}} src={BackButtonIcon} /></button>
        { forPage === 'select-contact' && (
          <div className='context' style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '.9rem' }}>Pilih Kontak</p>
            <p style={{ fontSize: '.8rem' }}>1 Kontak</p>
          </div>
        )}
      </div>
      <div className='right-side' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        { forPage === 'select-contact' && (
          <>
            <button style={{ border: 'none', backgroundColor: 'transparent', filter: 'brightness(0)' }}><img src={SearchIcon} style={{ width: '28px', height: '28px' }} /></button>
            <MoreOptionsButton style={{ }} buttonList={[
              ['Pengaturan kontak', () => { alert('test') }],
              ['Undang teman', () => { alert('test') }],
              ['Kontak', () => { alert('test') }],
              ['Perbarui', () => { alert('test') }],
              ['Bantuan', () => { alert('test') }],
            ]}/>
          </>
        )}
      </div>
    </header>
  )
}

export default Header