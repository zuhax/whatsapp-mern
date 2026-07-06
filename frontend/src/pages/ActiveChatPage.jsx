import { useState } from 'react'
import './styles/ActiveChatPage.css'
import ChatHeader from '../components/ChatHeader.jsx'

import StickerIcon from '../assets/sticker-button [518C942].png'
import CameraIcon from '../assets/camera-icon.png'
import VoiceRecordIcon from '../assets/voice-note [057235E].png'

function ActiveChatPage({ activeChat, setActiveChat, id, avatarUrl, networkStatus, firstName, lastName, fullName }) {
  const handleInsertImageButton = (e) => { e.preventDefault() ; alert('hai') }
  const handleVoiceRecordButton = (e) => { e.preventDefault() ; alert('hai')}
  return(
    <div className="active-chat-page">
      <ChatHeader activeChat={activeChat} setActiveChat={setActiveChat}
        id={id}
        avatarUrl={avatarUrl}
        networkStatus={networkStatus}
        firstName={firstName}
        lastName={lastName}
        fullName={fullName}
      />
      <main>
      </main>
      <form className="message-input" action="">
        <div className="left-side">
          <button className="more-input-button">
            <div className="horizontal-line" style={{ width: "20px", height: "2px", backgroundColor: "dodgerblue", borderRadius: '52px' }}></div>
            <div className="vertical-line" style={{ width: "2px", height: "20px", backgroundColor: "dodgerblue", borderRadius: '52px' }}></div>
          </button>
          <div className="input-column">
            <input className="text-input" type="text" placeHolder="Ketik pesan"/>
            <button className="sticker-button"> <img src={StickerIcon} alt="" /></button>
          </div>
        </div>
        <div className="right-side">
          <button className="insert-image-button" onClick={ handleInsertImageButton }> <img src={CameraIcon} alt=""/></button>
          <button className="voice-record-button" onClick={ handleVoiceRecordButton }> <img src={VoiceRecordIcon} alt=""/></button>
        </div>
      </form>
    </div>
  )
}

export default ActiveChatPage