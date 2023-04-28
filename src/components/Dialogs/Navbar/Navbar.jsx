import React from "react"
import styles from './Navbar.module.css'
import search from './Search.module.css'
import DialogItem from './DialogItem/DialogItem'

const Navbar = () => {
    return (
        <div className={styles.box}>
            <div className={search.search}>
                <input type="text" placeholder="Поиск" />
                <img src="https://cdn-icons-png.flaticon.com/512/6492/6492707.png" alt="" />
            </div>
            <div className={styles.dialogs}>
                <div className={styles.track}>
                    <DialogItem name="Tagir Voropaev" id="1" lastMessage="This is my text and i say goodbuyn"/>
                    <DialogItem name="Stanislav Orlov" id="2" lastMessage="This is my text"/>
                    <DialogItem name="Adelina Kandaurova" id="3" lastMessage="I want play the Counter Strike GLOBAL OFFENCIVE"/>
                    <DialogItem name="Tagir SSS" id="4" lastMessage="This is my text"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar