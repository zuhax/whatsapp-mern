import { useState, useEffect } from 'react'
import './styles/HomePage.css'

import HomePageHeader from '../components/HomePageHeader.jsx'
import PembaruanPage from '../pages/PembaruanPage.jsx'
import ActiveChatPage from '../pages/ActiveChatPage.jsx'

import newChatIcon from '../assets/new-chat-icon.png'



function HomePage() {
  const [activeTab, setActiveTab] = useState('semua')
  const [activeNav, setActiveNav] = useState('chat')
  const [activeChat, setActiveChat] = useState(false)
  const [availableChats, setAvailableChats] = useState([
    
    {
      id: "62895577663322@lid",
      avatarUrl: "",
      networkStatus: "online",
      lastSeen: "",
      firstName: "Dummy",
      lastName: "Contact 1",
      fullName: "Dummy Contact 1",
      lastMessage: "cek",
      lastMessageTime: "22.07",
      type: "private",
      archived: false,
      isPinned: false,
      isReaded: true,
      newMessagesCount: 1,
    },
    {
      id: "6281113888533@lid",
      avatarUrl: "",
      networkStatus: "online",
      lastSeen: "",
      firstName: "Nayla",
      lastName: "Agitsa",
      fullName: "Nayla Agitsa",
      lastMessage: "udah",
      lastMessageTime: "22.08",
      type: "private",
      archived: false,
      isPinned: false,
      isReaded: false,
      newMessagesCount: 1,
    }
  ])
  
  function cameraAlert() {
    alert("Kamera tidak tersedia.")
  }
  
  
  
  return(
    <div className="app-container">
      { activeChat ? ( <ActiveChatPage activeChat={activeChat} setActiveChat={setActiveChat} {...availableChats.find( chat => chat.id === activeChat )} /> ) : (
        <div className="landing-page">
            <HomePageHeader activeNav={activeNav}/>
            { activeNav === 'pembaruan' && <PembaruanPage />}
            { activeNav === 'chat' && (
              <main>
                <div className="filter-tabs">
                  <button onClick={() => setActiveTab('semua')} className={`chip-button ${activeTab === 'semua' ? 'active' : '' }`}>Semua</button>
                  <button onClick={() => setActiveTab('belum-dibaca')} className={`chip-button ${activeTab === 'belum-dibaca' ? 'active' : '' }`}>Belum dibacaa</button>
                  <button onClick={() => setActiveTab('bokap')} className={`chip-button ${activeTab === 'bokap' ? 'active' : '' }`}>Bokap</button>
                  <button onClick={() => setActiveTab('bekep')} className={`chip-button ${activeTab === 'bekep' ? 'active' : '' }`}>Bekep</button>
                  <button onClick={() => setActiveTab('bokek')} className={`chip-button ${activeTab === 'bokek' ? 'active' : '' }`}>Bokek</button>
                  <button className="chip-button">+</button>
                </div>
                { activeTab === 'semua' && (
                  <ul className="chat-list">
                    {
                      availableChats.length > 0 ? ( availableChats.map( subject => (
                        <li className="private-chat" key={ subject.id }>
                          <img className="avatar" src="" alt="" />
                          <div className="right-side" onClick={() => setActiveChat( subject.id )}>
                            <div className="name-n-time">
                              <p className="chat-name">{ subject.firstName + ' ' + subject.lastName}</p>
                              <p className="time">{ subject.lastMessageTime }</p>
                            </div>
                            <p className="chat-content">{ subject.lastMessage }</p>
                          </div>
                        </li>
                        ))
                      ) : (
                        <p>NiHao</p>
                      )
                    }
                  </ul>
                )}
                { activeTab === 'belum-dibaca' && (
                  <div className="tab-belum-dibaca">
                    <p className="checklist"><span className="inner">✔️</span></p>
                    <h2>Tidak ada obrolan yang belum dibaca</h2>
                    <p>Anda sudah membaca semuanya.</p>
                    <button onClick={()=>setActiveTab('semua')}>Lihat semua chat</button>
                  </div>
                )}
              </main>
            )}
            <nav>
              <button className="new-chat-button" onClick={()=> alert('segera')}>
                <img style={{ width: '24px', height: '24px' }} src={newChatIcon} alt="n" />
              </button>
              <div className='slider'>
                <button className={ activeNav==='chat' ? 'active-nav' : '' } onClick={()=>setActiveNav('chat')}>Chat</button>
                <button className={ activeNav==='pembaruan' ? 'active-nav' : '' } onClick={()=>setActiveNav('pembaruan')}>Pembaruan</button>
                <button className={ activeNav==='komunitas' ? 'active-nav' : '' } onClick={()=>setActiveNav('komunitas')}>Komunitas</button>
                <button className={ activeNav==='panggilan' ? 'active-nav' : '' } onClick={()=>setActiveNav('panggilan')}>Panggilan</button>
              </div>
            </nav>
        </div>
        )
      }
    </div>
  )
}

export default HomePage