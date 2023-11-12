import React from 'react'
import WelcomeImage from '@/components/welcomeImage/welcomeImage';
import styles from './styles.module.css'
import Header from '@/components/header/header';
import { HiMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2'


export default function SignIn() {
    return (
        <div>

            <div>
                <header />
            </div>

            <div className={styles.container}>
                <div className={styles.areaLogin}>
                    <div className={styles.divCima}>                        
                        <div className={styles.cimaEsquerda}>
                            <input className={styles.usuario} type='username' name='usuario' placeholder='Usuário' />
                            <input className={styles.email} type='email' name='e-mail' placeholder='E-mail' />
                            
                        </div>
                        <div className={styles.cimaDireita}>
                            <input className={styles.senha} type='password' name='senha' placeholder='Senha' />
                            <input className={styles.senha2} type='password' name='confSenha' placeholder='Confirma Senha' />
                            <a className={styles.botaoEntr} type='submit' href='/' >Entrar</a>
                        </div>
                    </div>
                    <div className={styles.divBaixo}>
                        <h1></h1>
                    </div>

                </div>
            </div>
        </div>
    )
}