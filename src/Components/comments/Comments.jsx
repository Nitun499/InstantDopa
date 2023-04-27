import React, { useContext } from 'react'
import "../comments/Comments.scss"
import { AuthContext } from '../../context/authcontext'

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    const comments =[
        {
            id:1,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id perferendis, cum maiores non illum recusandae mollitia harum possimus eius!",
            name:"Ratan TATA",
            profilePic:"https://i.pinimg.com/236x/cb/fe/25/cbfe25decebe0416ed866fe97d75d6a0.jpg"
        },
        {
            id:2,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id perferendis, cum maiores non illum recusandae mollitia harum possimus eius!",
            name:"Sidharth",
            profilePic:"https://i.pinimg.com/236x/5e/ff/dd/5effdde2e9bfd3bb6baa476d1edc17d7.jpg"
        },
        {
            id:3,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id perferendis, cum maiores non illum recusandae mollitia harum possimus eius!",
            name:"Virat",
            profilePic:"https://i.pinimg.com/236x/37/64/01/3764019b090666cdcd7ce760faf931f8.jpg"
        },
    ]
  return (
    <div className='comments'>
    <div className="writecomment">
        <img src={currentUser.profilepic} />
        <input type="text" placeholder='write a comment' />
        <button>Send</button>
    </div>
        {comments.map((item,index)=>
             (<div className="comment">
                <img src={item.profilePic} alt={item.name} />
                <div className="info">
                    <span>{item.name}</span>
                    <p>{item.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>)
        )}
    </div>
  )
}

export default Comments
