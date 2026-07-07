import './styles/DropdownMenu.css'

function DropdownMenu({ buttonList, menuOpen, setMenuOpen }) {
  const handleButtonClick = () => { setMenuOpen(!menuOpen) }
  return(
    <div>
      <div className="dropdown-menu">
        { buttonList.map( item => (
          <button onClick={handleButtonClick}>{item}</button>
        ))}
      </div>
      <div className="transparent-layer" onClick={() => setMenuOpen(!menuOpen)}></div>
    </div>
  )
}

export default DropdownMenu