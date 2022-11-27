import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>    
      <div>
        <h1>Sign-Up</h1>
        <p>Already Have Account- <Link to='/signin'>Sign In</Link></p>
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
        <div><button type='submit'>Create Account</button></div>
      </form>
    </>
  )
}

export default SignUp