import React from 'react'
import { getPostData } from '../lib/posts'

const Home = () => {
  const {data,content} = getPostData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} /> 
    </div>
  )
}

export default Home
