import React from 'react'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header>
        <nav>
            <h2>devFinder</h2>
            <div className={styles.mode}>
                <h5>Light</h5>
                <img src="/src/assets/sun.svg" />
            </div>
        </nav>
    </header>
  )
}

export default Header