import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

function App() {
  const login=false
  return (
    <div className="App">
        <p>
          Commerce App
        </p>
        <Routes>
          <Route path='/' element={login?<Home />:<Navigate to="/signin" replace/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
