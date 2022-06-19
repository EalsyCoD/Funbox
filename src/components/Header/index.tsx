import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Ты сегодня покормил кота?</span>
        </div>
    )
}



export default Header 