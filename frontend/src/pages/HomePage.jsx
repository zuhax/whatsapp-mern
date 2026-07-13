import { useState, useEffect } from 'react'
import './styles/HomePage.css'

import ChatItem from '../components/ChatItem.jsx'
import HomePageHeader from '../components/HomePageHeader.jsx'

import PembaruanPage from '../pages/PembaruanPage.jsx'
import ActiveChatPage from '../pages/ActiveChatPage.jsx'

import newChatIcon from '../assets/new-chat-icon.png'
import CameraIcon from '../assets/camera-icon.png'
import CellPhoneIcon from '../assets/voice-call-icon.png' 


function HomePage() {
  const [messageTextValue, setMessageTextValue] = useState(false)
  const [selectedChatId, setSelectedChatId] = useState([])
  const [activeTab, setActiveTab] = useState('semua')
  const [activeNav, setActiveNav] = useState('chat')
  const [activeChat, setActiveChat] = useState(false)
  const [activePage, setActivePage] = useState("home-page")
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
      lastMessageType: "text",
      type: "private",
      archived: false,
      isPinned: false,
      isReaded: true,
      isMentioned: false,
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
      lastMessageType: "text",
      type: "private",
      archived: false,
      isPinned: false,
      isReaded: false,
      isMentioned: false,
      newMessagesCount: 1,
    }
  ])
  
  function cameraAlert() {
    alert("Kamera tidak tersedia.")
  }
  
  
  
  return(
    <div className="app-container">
      { activeChat ? ( <ActiveChatPage
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        messageTextValue={messageTextValue}
        setMessageTextValue={setMessageTextValue}
        {...availableChats.find( chat => chat.id === activeChat )}/>
        ) : (
        <div className="landing-page">
            <HomePageHeader activeNav={activeNav} selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId} />
            { activeNav === 'pembaruan' && <PembaruanPage />}
            { activeNav === 'chat' && (
              <main>
                <div className="filter-tabs">
                  <button onClick={() => setActiveTab('semua')} className={`chip-button ${activeTab === 'semua' ? 'active' : '' }`}>Semua</button>
                  <button onClick={() => setActiveTab('belum-dibaca')} className={`chip-button ${activeTab === 'belum-dibaca' ? 'active' : '' }`}>Belum dibaca</button>
                  <button onClick={() => setActiveTab('bokap')} className={`chip-button ${activeTab === 'bokap' ? 'active' : '' }`}>Bokapp</button>
                  <button onClick={() => setActiveTab('bekep')} className={`chip-button ${activeTab === 'bekep' ? 'active' : '' }`}>Bekepp</button>
                  <button onClick={() => setActiveTab('bokek')} className={`chip-button ${activeTab === 'bokek' ? 'active' : '' }`}>Bokek</button>
                  <button className="chip-button">+</button>
                </div>
                { activeTab === 'semua' && (
                  <ul className="chat-list">
                    { availableChats.length > 0 ? (
                      availableChats.map( subject => (
                        <ChatItem activeChat={activeChat}
                            setActiveChat={setActiveChat}
                            id={subject.id}
                            avatarUrl={subject.avatarUrl}
                            firstName={subject.firstName}
                            lastName={subject.lastName}
                            fullName={subject.fullName}
                            lastMessage={subject.lastMessage}
                            lastMessageTime={subject.lastMessageTime}
                            lastMessageType={subject.lastMessageType}
                            isMentioned={subject.isMentioned}
                            isReaded={subject.isReaded}
                            selectedChatId={selectedChatId}
                            setSelectedChatId={setSelectedChatId}
                        />
                      ))
                    ):( <p>Hi</p> )}
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
                {
                  activeNav === 'chat' && (
                  <button className="new-chat-button" onClick={()=> alert('segera')}>
                    <img style={{ width: '24px', height: '24px' }} src={newChatIcon} alt="n" />
                  </button> )
                }
                {
                  activeNav === 'pembaruan' && (
                  <button className="new-chat-button" onClick={()=> alert('segera')}>
                    <img style={{ width: '24px', height: '24px', filter: 'saturate(0) brightness(0) invert(1)' }} src={CameraIcon} alt="n" />
                  </button> )
                }
                {
                  activeNav === 'panggilan' && (
                  <button className="new-chat-button" onClick={()=> alert('segera')}>
                    <img style={{ width: '24px', height: '24px', filter: 'saturate(0) brightness(0) invert(1)' }} src={CellPhoneIcon} alt="n" />
                  </button> )
                }
              <div className='slider'>
                <button className={ activeNav==='chat' ? 'active-nav' : '' } onClick={()=> { setActiveNav('chat'); setSelectedChatId([]) }}>Chat</button>
                <button className={ activeNav==='pembaruan' ? 'active-nav' : '' } onClick={()=>{setActiveNav('pembaruan'); setSelectedChatId([])}}>Pembaruan</button>
                <button className={ activeNav==='komunitas' ? 'active-nav' : '' } onClick={()=>{setActiveNav('komunitas'); setSelectedChatId([])}}>Komunitas</button>
                <button className={ activeNav==='panggilan' ? 'active-nav' : '' } onClick={()=>{setActiveNav('panggilan'); setSelectedChatId([])}}>Panggilan</button>
              </div>
            </nav>
        </div>
        )
      }
    </div>
  )
}

export default HomePage