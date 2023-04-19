import React from 'react';
import './reboot.css';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

const App = () => {
  return  (
    <div>
      <Header/>
      <div className='app-wrapper'>
        <Sidebar/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
