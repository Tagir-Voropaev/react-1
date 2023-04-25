import React from "react";
import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={styles.box}>
            <h3 className={styles.myposts}>My posts</h3>
            <div className={styles.newpost}>
                <textarea type="text" placeholder="Share your news" className={styles.textarea} wrap="soft"/>
                <button>Send</button>
            </div>
            <div className={styles.post}>
                <Post message="Hello!"/>
            </div>
        </div>
    )
}

export default Posts