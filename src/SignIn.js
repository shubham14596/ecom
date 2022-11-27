import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div>
        <h1>Sign-In</h1>
        <p>New user- <Link to='/signup'>Sign Up</Link></p>
      </div>
      <form>
        <div>
          <label style={{margin:5}}>Email</label>
          <input style={{margin:5}} type='email' />
        </div>
        <div>
          <label style={{margin:5}}>Password</label>
          <input style={{margin:5}} type='password' />
        </div>
        <div><button type='submit'>Sign In</button></div>
      </form>
    </>
  )
}

export default SignIn