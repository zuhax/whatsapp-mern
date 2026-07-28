import Header from '../components/Header.jsx'

function SelectContactPage({ activePage, setActivePage }) {
  const buttonList = [
    ['', 'Grup baru', () => {}],
    ['', 'Kontak baru', () => {}],
    ['', 'Komunitas baru', () => {}],
  ]
  return (
    <>
      <Header backButton={() => { setActivePage('home') }} forPage='select-contact' />
      <main style={{ width: '100%', height: 'fit', backgroundColor: '', marginTop: "64px" }} >
         <ul style={{ listStyle: 'none' }}>
           { buttonList.map( item => (
              <li>
                <button style={{ border: 'none', width: '100%', paddingBlock: '8px', backgroundColor: 'transparent', paddingInline: '12px' }}>
                  <div className='left-side' style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    { item[0] ? (
                      <img src={item[0]}/>
                    ):(
                      <img style={{ borderRadius: '999px', width: '40px', height: '40px', backgroundColor: 'gray' }}/>
                    )}
                    <p style={{ fontSize: '15px' }}>{item[1]}</p>
                  </div>
                  <div className='right-side'></div>
                </button>
              </li>
           ))
           }
         </ul>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default SelectContactPage