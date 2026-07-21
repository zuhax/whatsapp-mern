import { useState } from 'react'
import DropdownMenu from '../DropdownMenu.jsx'
import './styles/MoreOptionsButton.css'

function MoreOptionsButton() {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <div className="more-options-button-container">
      <button className="more-options-button" onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "24px"}}>
        <p>⋮</p>
        { menuOpen && (
          <DropdownMenu buttonList={["Tandai belum dibaca"]} />
        )}
      </button>
    </div>
  )
}

export default MoreOptionsButton