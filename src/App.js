import React from 'react';
import './reboot.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={styles.AppWrapper}>
          <Sidebar />
          <div className={styles.content}>
            {/* <Dialogs /> */}
            <Routes>
              <Route path='/messages' element={<Dialogs/>} />
              <Route path='/profile' element={<Profile/>} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
