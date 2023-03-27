// library import
import { useState, useEffect } from 'react'

//component import
import InputForm from './components/InputForm'
import ShowPosts from './components/ShowPosts'
import './App.css'

function App() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch("http://localhost:9898/api/getPosts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  if (!posts) return

  return (
    <div className="App">
      <InputForm setPosts= {setPosts}/>
      {posts.map(post =>{
        return <ShowPosts post= {post}/>
      })}
    </div>
  )
}

export default App
