import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from './App'

const SignUp = () => {
// create user for session

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const { createUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      console.log(await createUser(email, password))
      navigate('/')
    }
    catch(r){
      setError(r.message)
      console.log(r.message)
    }
  }

  return (
    <>    
      <div>
        <h1>Sign-Up</h1>
        <p>Already Have Account- <Link to='/signin'>Sign In</Link></p>
      </div>
      <form>
        <div>
          <label style={{margin:5}}>Email</label>
          <input style={{margin:5}} type='email' onChange={ (e)=> setEmail(e.target.value) } />
        </div>
        <div>
          <label style={{margin:5}}>Password</label>
          <input style={{margin:5}} type='password' onChange={ (e) => setPassword(e.target.value) }/>
        </div>
        <div><button type='submit' onClick={handleSubmit}>Create Account</button></div>
      </form>
    </>
  )
}

export default SignUp