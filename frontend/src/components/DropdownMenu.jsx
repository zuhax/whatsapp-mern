import './styles/DropdownMenu.css'

function DropdownMenu({ buttonList, menuOpen, setMenuOpen }) {
  return(
    <div>
      <div className="dropdown-menu">
        { buttonList.map( item => (
          <button>{item}</button>
        ))}
      </div>
      <div className="transparent-layer" onClick={() => setMenuOpen(!menuOpen)}></div>
    </div>
  )
}

export default DropdownMenu