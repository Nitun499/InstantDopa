import React from 'react'
import '../posts/Posts.scss'
import Post from '../post/Post'

const Posts = () => {
  const posts =[
    {
      id:1,
      userId:1,
      name:"Shivay",
      profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      img:"https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
    },
    {
      id:2,
      userId:2,
      name:"RanaJi",
      profilePic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      img:"https://images.pexels.com/photos/7119192/pexels-photo-7119192.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
    },
  ]
  return (
    <div className='posts'>
     {posts.map(post=>(
      <Post post={post} key={post.id}/>
     ))}
    </div>
  )
}

export default Posts
