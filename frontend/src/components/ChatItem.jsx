import './styles/ChatItem.css'

function ChatItem({
  activeChat,
  setActiveChat,
  id,
  avatar,
  firstName,
  lastName,
  fullName,
  lastMessage,
  lastMessageType,
  isMentioned,
  isNotReaded
}) {
  
  return(
    <div className="chat-item">
      <li className="private-chat" key={ id }>
        <img className="avatar" src="" alt="" />
        <div className="right-side" onClick={() => setActiveChat( id )}>
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