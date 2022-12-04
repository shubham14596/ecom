import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from './firebase'

export const UserContext  = createContext()

function App() {
  const [ user, setUser ] = useState({})
  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email,password)

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
        <UserContext.Provider value={{user, createUser}}>
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
