import './styles/ChatHeader.css'

function ChatHeader({ activeChat, setActiveChat }) {
  return(
    <div className="chat-header">
      <button className="back-button" onClick={() => setActiveChat(false)}></button>
      <div className="avatar-and-contact-info">
        <img className="avatar" src="" alt="" />
        <div className="name-and-info">
          <p className="name"></p>
          <p className="network-status">offline</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader