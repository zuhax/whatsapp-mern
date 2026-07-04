import './styles/PembaruanPage.css'

function PembaruanPage() {
  return(
    <div className="pembaruan-page">
      <h3>Status</h3>
      <ul>
        <li className="user-add-status">
          <div className="user-avatar">Z</div>
          <div className="plus">+</div>
          <p>Tambah Status</p>
        </li>
      </ul>
      <div className="saluran-header">
        <h3 className="title">Saluran</h3>
        <button>Jelajahi</button>
      </div>
    </div>
  )
}

export default PembaruanPage