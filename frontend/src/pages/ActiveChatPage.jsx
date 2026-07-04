import { useState } from 'react'
import './styles/ActiveChatPage.css'
import ChatHeader from '../components/ChatHeader.jsx'

function ActiveChatPage({ activeChat, setActiveChat }) {
  return(
    <div className="active-chat-page">
      <ChatHeader activeChat={activeChat} setActiveChat={setActiveChat} />
      <p>Chat</p>
      <p>Id:<span>{` ${activeChat}`}</span></p>
    </div>
  )
}

export default ActiveChatPage