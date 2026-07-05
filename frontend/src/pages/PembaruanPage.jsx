import './styles/PembaruanPage.css'
import { useState, useEffect } from 'react'


function PembaruanPage() {
  const [followedChannel, setFollowedChannel] = useState([
    {
      channelId: '00889955337722@ch.id',
      channelName: 'stciker random',
      channelIcon: false,
      channelFollower: 240000,
      isFollowing: true,
      lastMessage: '',
      lastMessageType: 'text',
      unreadMessageCount: 0,
      lastMessageTime: 'yesterday',
      isChannelAvailable: true,
    },
    {
      channelId: '00889955337722@ch.id',
      channelName: 'stciker random',
      channelIcon: false,
      channelFollower: 240000,
      isFollowing: true,
      lastMessage: '',
      lastMessageType: 'text',
      unreadMessageCount: 0,
      lastMessageTime: 'yesterday',
      isChannelAvailable: true,
    }
    ])
  
  
  return(
    <div className="pembaruan-page">
      <h3>Status</h3>
      <ul>
        <li className="user-add-status">
          <div className="user-avatar">Z</div>
          <div className="plus">+</div>
          <p>Tambah Status</p>
        </li>
      </ul>
      <div className="saluran-header">
        <h3 className="title">Saluran</h3>
        <button>Jelajahi</button>
      </div>
      { followedChannel.length === 0 ? (
        <p>Dapatkan berita terbaru tentang topik yang Anda minati.</p>
      ):( followedChannel.map( channel => (
          <ul>
            <li key={ channel.id }>
              <div className="left-side">
                <img className="avatar" src="" alt="" />
                <p className="channel-name">{ channel.channelName }</p>
              </div>
            </li>
          </ul>
        ))
      )}
    </div>
  )
}

export default PembaruanPage