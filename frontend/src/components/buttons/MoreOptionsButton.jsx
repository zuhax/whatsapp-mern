import { useState } from 'react'
import DropdownMenu from '../DropdownMenu.jsx'
import './styles/MoreOptionsButton.css'

function MoreOptionsButton({ buttonList }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <div className="more-options-button-container">
      {/*setMenuOpen(!menuOpen)} style={{ fontSize: "24px"}}*/}
      <button style={{ fontSize: "24px"}} className="more-options-button" onClick={() => setMenuOpen(!menuOpen)} >
        <p>⋮</p>
        { menuOpen && (
          <DropdownMenu buttonList={buttonList} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </button>
    </div>
  )
}

export default MoreOptionsButton