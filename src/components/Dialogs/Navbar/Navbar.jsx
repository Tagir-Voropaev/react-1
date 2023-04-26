import React from "react"
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.box}>
            <div className={styles.search}>
                <input type="text" placeholder="Поиск"/>
                <img src="https://cdn-icons-png.flaticon.com/512/6492/6492707.png" alt="" />
            </div>
            <div className={styles.dialogs}>
                <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src="https://abrakadabra.fun/uploads/posts/2022-02/1644169591_2-abrakadabra-fun-p-avatarka-s-ulibkoi-3.png" alt="" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.name}>Tagir Voropaev</p>
                            <div className={styles.message}><span>You:</span><p>My message that I wrote and something else that can be written very long. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eos?</p></div>
                        </div>
                </div>
                <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src="https://abrakadabra.fun/uploads/posts/2022-02/1644169591_2-abrakadabra-fun-p-avatarka-s-ulibkoi-3.png" alt="" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.name}>Tagir Voropaev</p>
                            <div className={styles.message}><span>You:</span><p>My message that I wrote and something else that can be written very long. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eos?</p></div>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar