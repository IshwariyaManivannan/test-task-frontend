import React from 'react';
import { Route, Routes  , Navigate} from 'react-router-dom';
import Login from './components/login/login'
import Signup from './components/signup/signup';
import './App.css';

function App() {
  return (
   <div className='mainWarrpper'>
    <Routes>
      <Route path='/'  element ={<Navigate to = "/login"/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
   </div>
  );
}

export default App;
