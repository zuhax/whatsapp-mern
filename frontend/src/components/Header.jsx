import BackButtonIcon from '../assets/back-button [B061DD2].png' 

function Header({ backButton }) {
  return(
    <header style={{ top: 0, position: 'fixed', zIndex: '20', alignItems: 'center', display: 'flex', width: '100%', height: '44px', backgroundColor: 'transparent'}}>
      <div className='left-side'>
        <button onClick={backButton} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: 'transparent', filter: 'brightness(0)' }}><img style={{ width: 'auto', height: '32px'}} src={BackButtonIcon} /></button>
      </div>
      <div className='right-side'></div>
    </header>
  )
}

export default Header