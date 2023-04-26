import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
      return (
      <nav className={styles.box}>
            <ul className={styles.pages}>
                  <li className={styles.page}><NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.pages }>Profile</NavLink></li>
                  <li className={styles.page}><NavLink to="/messages" className = { navData => navData.isActive ? styles.active : styles.pages }>Messages</NavLink></li>
                  <li className={styles.page}><NavLink to="/feed" className = { navData => navData.isActive ? styles.active : styles.pages }>News</NavLink></li>
                  <li className={styles.page}><NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.pages }>Music</NavLink></li>
                  <li className={styles.page}><NavLink to="settings" className = { navData => navData.isActive ? styles.active : styles.pages }>Settings</NavLink></li>
            </ul>
      </nav>
)};

export default Sidebar;