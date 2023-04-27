import React, { useContext } from 'react'
import "../profile/Profile.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthContext } from '../../context/authcontext'
import Posts from "../../Components/posts/Posts"


const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='profile'>
      <div className="images">
          <img src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg"  alt="" className='coverImage' />
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='profileImage' />
          
      </div>
    <div className="profileContainer">
      <div className="userInfo">
        <div className="left">
          <a href="https://facebook.com" target='_blank'>
            <FacebookIcon fontSize='large'/>
          </a>
          <a href="https://instagram.com" target='_blank'>
            <InstagramIcon fontSize='large'/>
          </a>
          <a href="https://github.com" target='_blank'>
            <GitHubIcon fontSize='large'/>
          </a>  
          <a href="https://twitter.com" target='_blank'>
            <TwitterIcon fontSize='large'/>
          </a>
        </div>
        <div className="center">
          <span>{currentUser.name}</span>
          <div className="info">
            <div className="item">
              <LocationOnIcon/>
              <span>INDIA</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>
                <a href="https://nitunsinghportfolio.web.app/" target='_blank'>nitunsingh.dev</a>
              </span>
            </div>
          </div>
            <button>Follow</button>
        </div>
        <div className="right">
          <EmailOutlinedIcon/>
          <MoreVertIcon/>
        </div>
      </div>
    </div>
    <Posts/>
      
    </div>
  )
}

export default Profile
