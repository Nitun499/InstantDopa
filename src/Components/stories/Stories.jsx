import { useContext } from 'react'
import '../stories/Stories.scss'
import '../../context/authcontext'
import { AuthContext } from '../../context/authcontext'

const Stories = () => {
  const {currentUser} = useContext(AuthContext)

  const stories =[
    {
      id:1,
      name:"Nitun Singh",
      img:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:2,
      name:"Nitun Singh",
      img:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      name:"Nitun Singh",
      img:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      name:"Nitun Singh",
      img:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    
  ]
  return (
    <div className='stories'>
        <div className="story">
          <img src={currentUser.profilepic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
