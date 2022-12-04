import React, { useContext } from 'react'
import { UserContext } from './App'

const Home = () => {
  const {user} = useContext(UserContext)
  return (
    <div>Home
        <h1>Profile</h1>
        <p>Welcome {user && user.email}</p>
        <button>Sign Out</button>
    </div>
  )
}

export default Home