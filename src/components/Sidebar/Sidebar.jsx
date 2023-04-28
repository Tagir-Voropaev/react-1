import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
      return (
      <nav className={styles.box}>
            <ul className={styles.pages}>
                  <li className={styles.page}><NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink></li>
                  <li className={styles.page}><NavLink to="/dialog/" className = { navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink></li>
                  <li className={styles.page}><NavLink to="/feed" className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink></li>
                  <li className={styles.page}><NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.item }>Music</NavLink></li>
                  <li className={styles.page}><NavLink to="settings" className = { navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink></li>
            </ul>
      </nav>
)};

export default Sidebar;