import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.item}>
                <img src='https://abrakadabra.fun/uploads/posts/2022-02/1644169591_2-abrakadabra-fun-p-avatarka-s-ulibkoi-3.png' alt="" className={styles.image}/>
                <p className={styles.text}>{props.message}</p>
            </div>
           
        </div>
    )
}

export default Post