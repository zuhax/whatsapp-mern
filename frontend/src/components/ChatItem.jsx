import { useState, useRef } from 'react'
import './styles/ChatItem.css'

function ChatItem({
  activeChat,
  setActiveChat,
  id,
  avatarUrl,
  firstName,
  lastName,
  fullName,
  lastMessage,
  lastMessageTime,
  lastMessageType,
  isMentioned,
  isReaded
}) {
    
    const hold = useRef(null)
    const startHold = () => { hold.current = setTimeout(() => { alert("hold detected") }, 500) }
    const cancelHold = () => clearTimeout(hold.current) 
    const handleAvatarClick = () => { alert('Avatar clicked') }
    
  return(
    <div className="chat-item">
      <li className="private-chat" key={ id }>
        <img className="avatar" src={avatarUrl} alt="" onClick={handleAvatarClick} />
        <div className="right-side" onClick={() => setActiveChat( id )} onTouchStart={startHold} onTouchEnd={cancelHold} >
          <div className="name-n-time">
            <p className="chat-name">{`${firstName} ${lastName}`}</p>
            <p className="time">{ lastMessageTime }</p>
          </div>
          <p className="chat-content">{ lastMessage }</p>
        </div>
      </li>
    </div>
  )
}

export default ChatItem