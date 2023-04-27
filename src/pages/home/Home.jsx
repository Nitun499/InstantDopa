import React from 'react'
import Stories from '../../Components/stories/Stories'
import Posts from '../../Components/posts/Posts'
import '../home/Home.scss'

const Home = () => {
  return (
    <div className='home'>
     <Stories />
     <Posts />
    </div>
  )
}

export default Home
