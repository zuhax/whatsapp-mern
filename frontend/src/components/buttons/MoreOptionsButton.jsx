import { useState } from 'react'
import DropdownMenu from '../DropdownMenu.jsx'

function MoreOptionsButton() {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <>
      <button className="more-options-button" onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "24px"}}>
        <p>⋮</p>
        { menuOpen && (
          <DropdownMenu buttonList={["Tandai belum dibaca"]} />
        )}
      </button>
    </>
  )
}

export default MoreOptionsButton