import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import Info from './Info/Info';

const Profile = () => {
      return (
      <div className={styles.box}>
            <Info/>
            <Posts/>
      </div>
)};

export default Profile;