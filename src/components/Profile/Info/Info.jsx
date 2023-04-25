import React from 'react';
import styles from './Info.module.css';

const Info = () => {
      return (
      <div className={styles.box}>
            <div className={styles.banner}>
                  <img src="https://live.staticflickr.com/7374/13378874113_c6dea6a006_b.jpg" alt="" />
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
)};

export default Info;