import React from "react";
import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div>
            <h3 className={styles.myposts}>My posts</h3>
            <div className={styles.newpost}>
                New post
                <input type="text" placeholder="Send your news" className={styles.input}/>
            </div>
            <div className={styles.post}>
                <Post/>
            </div>
        </div>
    )
}

export default Posts