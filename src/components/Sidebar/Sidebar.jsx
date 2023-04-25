import React from 'react';
import styles from './Sidebar.module.css';


const Sidebar = () => {
      return (
      <nav className={styles.box}>
            <ul className={styles.pages}>
                  <li className={styles.page}><a href="/profile">Profile</a></li>
                  <li className={styles.page}><a href="/messages">Messages</a></li>
                  <li className={styles.page}><a href="./feed">News</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">Music</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">Settings</a></li>
            </ul>
      </nav>
)};

export default Sidebar;