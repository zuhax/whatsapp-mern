import { useState, useRef } from 'react'
import './styles/ChatItem.css'
import Avatar from './Avatar.jsx'

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
    
    const hold = useRef(null);
    const isLongPress = useRef(false);
    
    const startHold = (id) => {
      isLongPress.current = false;
      
      hold.current = setTimeout(() => {
        isLongPress.current = true;
        
        setSelectedChatId(prev =>
          prev.includes(id)
            ? prev.filter(item => item !== id)
            : [...prev, id]
        );
        
        hold.current = null;
      }, 300);
    };
    
    const cancelHold = () => {
      if (hold.current) {
        clearTimeout(hold.current);
        hold.current = null;
      }
    };
    const handleAvatarClick = () => { alert('Avatar clicked') }
    
  return(
    
    <div className="chat-item" style={ selectedChatId.find( idList => idList === id ) ? { backgroundColor: 'lightgreen'} : {} }>
      <li className="private-chat" key={ id }>
        {/*<img className="avatar" src={avatarUrl} alt="" onClick={handleAvatarClick} />*/}
        <Avatar src={avatarUrl} fullName={fullName} firstName={firstName} />
        <div className="right-side" onClick={() => {
          if (isLongPress.current) {
            isLongPress.current = false;
            return;
          }
          
          if (selectedChatId.length > 0 && !selectedChatId.includes(id)) {
            setSelectedChatId(prev => [...prev, id]);
          } else if (selectedChatId.includes(id)) {
            setSelectedChatId(prev => prev.filter(itemId => itemId !== id));
          } else {
            setActiveChat(id);
          }
        }}
        onTouchStart={() => startHold(id)}
        onTouchEnd={() => cancelHold()}
        onMouseDown={() => startHold(id)}
        onMouseUp={() => cancelHold()}
        >
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