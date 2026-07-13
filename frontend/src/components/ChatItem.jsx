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
  isReaded,
  selectedChatId,
  setSelectedChatId
}) {
    
    const hold = useRef(null)
    const startHold = (id) => { hold.current = setTimeout(() => { selectedChatId.find( selectedId => selectedId === id ) ? setSelectedChatId(selectedChatId.filter( item => item !== id )) : setSelectedChatId([...selectedChatId, id])}, 300) }
    const cancelHold = () => { clearTimeout(hold.current) }
    const handleAvatarClick = () => { alert('Avatar clicked') }
    
  return(
    
    <div className="chat-item" style={ selectedChatId.find( idList => idList === id ) ? { backgroundColor: 'lightgreen'} : {} }>
      <li className="private-chat" key={ id }>
        <img className="avatar" src={avatarUrl} alt="" onClick={handleAvatarClick} />
        <div className="right-side" onClick={() => { if ( selectedChatId.length > 0 && !selectedChatId.find( itemId => itemId === id ) ) {
            setSelectedChatId([...selectedChatId, id])
          } else if ( selectedChatId.find( itemId => itemId === id ) ) {
            setSelectedChatId(selectedChatId.filter( itemId => itemId !== id ))
          } else {
            setActiveChat(id)
          }
        }} onTouchStart={() => startHold(id)} onTouchEnd={cancelHold} >
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