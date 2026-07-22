import './styles/DropdownMenu.css'

function DropdownMenu({ buttonList, menuOpen, setMenuOpen }) {
  const handleButtonClick = () => {
    setMenuOpen(!menuOpen)
    alert(buttonList)
  }
  return(
    <div>
      <div className="dropdown-menu">
        { buttonList.map( item => (
          <button onClick={item[1]}>{item[0]}</button>
        ))}
      </div>
      <div className="transparent-layer" onClick={() => setMenuOpen(!menuOpen)}></div>
    </div>
  )
}

export default DropdownMenu