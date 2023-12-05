import React from 'react'
import styles from './styles.module.css'
import { HiMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2'

export default function Header(props: any) {
    return (
      <div>
        <div className={styles.header}>
          <a href="/" className={styles.logo}></a>
          <div className={styles.headerright}>
            <a className={styles.Pesquisa} href="/"> <HiMagnifyingGlass/> Pesquisa</a>
            <a className={styles.Pesquisa} href="../user"><HiOutlineUser/>Login</a>
          </div>
        </div>
      </div>
    )
}