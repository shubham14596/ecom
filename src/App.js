import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from './firebase'

export const UserContext  = createContext()

function App() {
  const [ user, setUser ] = useState({})
  const navigate = useNavigate()

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email,password)
  const logout = async () => {
    await signOut(auth)
    navigate('/')
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      console.log(current)
      setUser(current)
    });
    return () => unsubscribe()
  })

  return (
    <div className="App">
        <p>
          Commerce App
        </p>
        <UserContext.Provider value={{user, createUser, logout}}>
          <Routes>
            <Route path='/' element={user?<Home />:<Navigate to="/signin" replace/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
