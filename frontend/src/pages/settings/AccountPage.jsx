import Header from "../../components/Header.jsx"
import LandingPage from '../LandingPage.jsx'
import { useState } from 'react'

function AccountPage({ activeSettingsPage, setActiveSettingsPage }) {
    const [activePage, setActivePage] = useState('')
    const handleLogoutbutton = () => {
        localStorage.setItem('last-page', 'landing');
        setActivePage('landing')
    }
    return (
        <>
            { activePage == 'landing' && ( <LandingPage />)}
            { activePage == '' && (
                <>
                    <Header backButton={() => setActiveSettingsPage()}></Header>
                    <main style={{ marginTop: '60px' }}>
                        <button onClick={handleLogoutbutton}>Log out</button>
                    </main>
                </>
            )}
        </>
    )
}

export default AccountPage