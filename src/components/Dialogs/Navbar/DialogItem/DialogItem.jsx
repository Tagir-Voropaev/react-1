import React from "react"
import styles from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialog/" + props.id} className={styles.item}>
            <div className={styles.avatar}>
                <img src="https://abrakadabra.fun/uploads/posts/2022-02/1644169591_2-abrakadabra-fun-p-avatarka-s-ulibkoi-3.png" alt="" />
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{props.name}</p>
                <div className={styles.message}><span>You:</span><p>{props.lastMessage}</p></div>
            </div>
        </NavLink>
    )
}

export default DialogItem