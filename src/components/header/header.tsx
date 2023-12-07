import React from 'react'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import styles from './styles.module.css'
import { HiMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2' 
import { useRouter } from 'next/navigation';


 /* const handleClick = () => {
    const url = JSON.stringify(session.user?.id)
    console.log(url)
    const url64 = Buffer.from(url).toString("base64")
    console.log(url64)
    router.push('/result?query=' + url64)
}*/


export default async function Header(props: any) {
  const session = await getServerSession(options)
  let Label
  if(!session) {
    Label = "Login"
  } else {
    Label = session.user?.name
  }
  const user = JSON.stringify(session)
  console.log(user)

//  const urlQuery = "./user?query=" + user.id

    return (
      <div>
        <div className={styles.header}>
          <a href="/" className={styles.logo}></a>
          <div className={styles.headerright}>
            <a className={styles.Pesquisa} href="/"> <HiMagnifyingGlass/> Pesquisa</a>
            <a className={styles.Pesquisa} href="../user?query" ><HiOutlineUser/>{Label}</a>
          </div>
        </div>
      </div>
    )
}