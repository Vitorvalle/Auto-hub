import React from 'react'
import styles from './styles.module.css'

export default function Header(props: any) {
    return (
      <div>
        <div className={styles.header}>
          <a href="#default" className={styles.logo}>CompanyLogo</a>
          <div className='header-right'>
            <a className={styles.active} href="./login">Home</a>
            <a href="#contact">Contact</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    )
}