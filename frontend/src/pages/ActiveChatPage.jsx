import { useState } from 'react'
import './styles/ActiveChatPage.css'
import ChatHeader from '../components/ChatHeader.jsx'
import MessageInputColumn from '../components/MessageInputColumn.jsx'

function ActiveChatPage({ activeChat, setActiveChat, id, avatarUrl, networkStatus, firstName, lastName, fullName }) {
  
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
      <MessageInputColumn />
    </div>
  )
}

export default ActiveChatPage