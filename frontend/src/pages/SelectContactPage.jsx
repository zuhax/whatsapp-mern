import Header from '../components/Header.jsx'

function SelectContactPage({ activePage, setActivePage }) {
  return (
    <>
      <Header backButton={() => {
        setActivePage('home')
      }} />
    </>
  )
}

export default SelectContactPage