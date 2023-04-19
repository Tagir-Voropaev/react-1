import React from 'react';
import styles from './Sidebar.module.css';


const Sidebar = () => {
      return (
      <nav className={styles.box}>
            <ul className={styles.pages}>
                  <li className={styles.page}><a href="https://vk.com/feed">Profile</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">Messages</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">News</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">Music</a></li>
                  <li className={styles.page}><a href="https://vk.com/feed">Settings</a></li>
            </ul>
      </nav>
)};

export default Sidebar;