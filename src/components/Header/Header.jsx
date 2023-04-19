import React from 'react';
import styles from './Header.module.css';

const Header = () => {
      return (
      <header className={styles.box}>
            <div className={styles.content}>
                  <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt=''/>
            </div>
      </header> 
)};

export default Header;