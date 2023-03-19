import React from 'react';
import { Route, Routes  , Navigate} from 'react-router-dom';
import Login from './components/login/login'
import Signup from './components/signup/signup';
import Profile from './components/profile/profile';
import AuthProvider from './context/auth';
import './App.css';

function App() {
  return (
   <div className='mainWarrpper'>
    <AuthProvider>
    <Routes>
      <Route path='/'  element ={<Navigate to = "/login"/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='profile' element ={<Profile/>} />
    </Routes>
    </AuthProvider>
 
   </div>
  );
}

export default App;
