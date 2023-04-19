import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
      return (
      <div className={styles.box}>
            <div className={styles.navbar}>
                  <div className={styles.banner}>
                        <img src="https://i1.wp.com/carsandcoffeefolsom.com/wp-content/uploads/2018/06/TwMedia-Banner-1000x200-1-2.png?fit=1000%2C200&ssl=1" alt="" />
                  </div>
                  <div className={styles.account}>
                        <img className={styles.avatar} src="https://publicdomainvectors.org/tn_img/Linux-Avatar.webp" alt="" />
                        <div className={styles.infoBox}>
                              <div className={styles.name}>Tagir Voropaev</div>
                              <div className={styles.info}>
                                    <ul>
                                          <li>Date if Birth: 19.03.2004</li>
                                          <li>City: Kazan</li>
                                          <li>Web Site: https://my-site.com</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
            <div className={styles.other}>
                  <Posts/>
            </div>
      </div>
)};

export default Profile;