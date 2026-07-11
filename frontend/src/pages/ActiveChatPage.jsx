import { useState } from 'react'
import './styles/ActiveChatPage.css'
import ChatHeader from '../components/ChatHeader.jsx'
import MessageInputColumn from '../components/MessageInputColumn.jsx'
import DefaultWallpaperLight from '../assets/default-wallpaper-light.jpg'

function ActiveChatPage({
    activeChat,
    setActiveChat,
    id,
    avatarUrl,
    networkStatus,
    firstName,
    lastName,
    fullName,
    backgroundWallpaper,
    messageTextValue,
    setMessageTextValue
}) {
  return(
    <div className="active-chat-page">
      <img className="chat-background-wallpaper" src={DefaultWallpaperLight} alt="" />
      <ChatHeader
        activeChat={activeChat} setActiveChat={setActiveChat}
        id={id}
        avatarUrl={avatarUrl}
        networkStatus={networkStatus}
        firstName={firstName}
        lastName={lastName}
        fullName={fullName}
      />
      <main className="chat-bubbles">
        
      </main>
      <MessageInputColumn
        messageTextValue={messageTextValue}
        setMessageTextValue={setMessageTextValue}
      />
    </div>
  )
}

export default ActiveChatPage