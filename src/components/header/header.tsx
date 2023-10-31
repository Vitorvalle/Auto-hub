import React from 'react'
import styles from './styles.module.css'

export default function Header(props: any) {
    return (
      <div>
        <div className={styles.header}>
          <a href="/" className={styles.logo}>CompanyLogo</a>
          <div className={styles.headerright}>
            <a className={styles.active} href="/">Home</a>
            <a href="/result">Contact</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    )
}