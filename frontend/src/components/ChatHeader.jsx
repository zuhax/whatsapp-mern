import './styles/ChatHeader.css'

function ChatHeader({ activeChat, setActiveChat, id, avatarUrl, networkStatus, firstName, lastName, fullName }) {
  return(
    <div className="chat-header">
      <div className="left-side">
        <button className="back-button" onClick={() => setActiveChat(false)}></button>
        <div className="avatar-and-contact-info">
          <img className="avatar" src="" alt="" />
          <div className="name-and-info">
            <p className="chat-name">{ fullName }</p>
            <p className="network-status">{ networkStatus }</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <button>Call</button>
      </div>
    </div>
  )
}

export default ChatHeader