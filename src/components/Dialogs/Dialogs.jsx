import React from "react"
import styles from './Dialolgs.module.css'
import Navbar from "./Navbar/Navbar"
import Dialog from "./Dialog/Dialog"
const Dialogs = () => {
    return (
        <div className={styles.box}>
            <Navbar />
            <Dialog />
        </div>
    )
}

export default Dialogs