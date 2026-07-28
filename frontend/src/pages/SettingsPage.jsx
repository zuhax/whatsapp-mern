import Header from '../components/Header.jsx'

function SettingsPage({ activePage, setActivePage }) {
  class SettingsButton {
    constructor({ icon, title, subtitle }) {
      this.icon = icon;
      this.title = title;
      this.subtitle = subtitle;
    }
  }
  const buttonList = [
    new SettingsButton({ icon: '', title: 'Akun', subtitle: 'Notifikasi keamanan, ganti nomor'}),
    new SettingsButton({ icon: '', title: 'Privasi', subtitle: 'Akun diblokir, pesan sementara'}),
    new SettingsButton({ icon: '', title: 'Daftar', subtitle: 'Kelola orang dan grup'}),
    new SettingsButton({ icon: '', title: 'Chat', subtitle: 'Tema, wallpaper, riwayat obrolan'}),
    new SettingsButton({ icon: '', title: 'Tampilan', subtitle: 'Tema obrolan, ikon aplikasi, tema aplikasi'}),
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#e9e9e4', width: '100%', height: '100dvh' }} className="settings-page-container">
      <Header backButton={() => { setActivePage('home') }} />
      <main style={{ flexDirection: 'column', alignItems: 'center', width: '100%', height: '100dvh', backgroundColor: 'white', marginTop: '152px', zIndex: '10', display: 'flex', borderTopLeftRadius: '32px', borderTopRightRadius: '32px' }}>
        <section style={{ width: '100%', height: 'auto', transform: 'translateY(-56px)', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="user-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '112px', height: '112px', backgroundColor: 'white', borderRadius: '999px' }}>
            <div style={{ width: '104px', height: '104px', backgroundColor: 'gray', borderRadius: '999px'}}></div>
          </div>
          <p className='user-name' style={{ marginTop: '12px', fontSize: '20px' }}>{'zhnmrtnn'}</p>
          <ul style={{ marginTop: '44px', listStyle: 'none', width: '100%' }}>
            {
              buttonList.map( item => (
                <li style={{ display: 'flex', width: '100%', height: 'auto' }}>
                  <button style={{ paddingInline: '12px', gap: '16px', display: 'flex', width: '100%', alignItems: 'center', backgroundColor: 'transparent', border: 'none', paddingBlock: '12px' }}>
                    <div className="left-side" style={{ width: '32px', height: '32px', backgroundColor: 'gray', borderRadius: '999px' }}>
                      <div className='icon' style={{  }}></div>
                    </div>
                    <div className="right-side" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px'}}>
                      <p className='title' style={{ fontSize: '16px' }}>{ item.title }</p>
                      <p className='subtitle' style={{ fontSize: '15px', opacity: '60%' }}>{ item.subtitle }</p>
                    </div>
                  </button>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
      <footer style={{ zIndex: '10' }}>Footer</footer>
    </div>
  )
}

export default SettingsPage