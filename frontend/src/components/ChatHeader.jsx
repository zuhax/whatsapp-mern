import './styles/ChatHeader.css'
import videoCallIcon from '../assets/video-call-icon.png'
import voiceCallIcon from '../assets/voice-call-icon.png'
import Avatar from './Avatar.jsx'

function ChatHeader({ activeChat, setActiveChat, id, avatarUrl, networkStatus, firstName, lastName, fullName }) {
  const segera = () => alert('segera')
  return(
    <div className="chat-header">
      <div className="left-side">
        <button className="back-button" onClick={() => setActiveChat(false)}></button>
        <div className="avatar-and-contact-info">
          {/*<img className="avatar" src="" alt="" />*/}
          <Avatar src={avatarUrl} fullName={fullName} firstName={firstName}/>
          <div className="name-and-info">
            <p className="chat-name">{ fullName }</p>
            <p className="network-status">{ networkStatus }</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <button className="video-call-button call-button" onClick={segera}><img src={videoCallIcon} alt=""/></button>
        <button className="voice-call-button call-button" onClick={segera}><img src={voiceCallIcon} alt=""/></button>
      </div>
    </div>
  )
}

export default ChatHeader