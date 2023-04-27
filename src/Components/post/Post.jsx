import { Link } from 'react-router-dom';
import './Post.scss'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from 'react';
import Comments from '../comments/Comments';

const Post = ({post}) => {
  const [commentOpen,setCommentOpen] = useState(false)


  let liked =false;
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                  <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
                  <span className='name'>{post.name}</span>
                  </Link>
                  <span className='date'>1 min ago</span>
              </div>
              
          </div>
          <MoreHorizOutlinedIcon style={{cursor:"pointer"}} />
        </div>
      <div className="content">
        <p className='shortdesc'>{post.desc}</p>
        <img src={post.img} alt={post.name} />
      </div>
      <div className="interaction">
        <div className="item" >
             {liked?<FavoriteIcon style={{cursor:"pointer"}} />:<FavoriteBorderOutlinedIcon style={{cursor:"pointer"}}/>}
             12 Likes
        </div>
        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
              <ChatBubbleOutlineOutlinedIcon /> 
              12 comments
        </div>
        <div className="item">
          <ShareOutlinedIcon />
        </div>
      </div>
    </div>
    {commentOpen &&<Comments/>}
    </div>
  )
}

export default Post
