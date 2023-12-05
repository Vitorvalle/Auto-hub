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
                    <div id="loginContent">
                        <div className={styles.divEsquerda}>
                            <h1 className={styles.escritaLogin}>Login</h1>
                            <input className={styles.usuario} type='username' name='usuario' placeholder='Usuário ou E-mail' />
                            <input className={styles.senha} type='password' name='senha' placeholder='Senha' />

                            <a className={styles.botaoEntr} type='submit' href='/' >Entrar</a>
                            <a className={styles.botaoCads} type='button' href="./cadastro/" >Cadastrar-se</a>
                        </div>
                    </div>

                    <div className={styles.divDireita}></div>
                </div>
            </div>
        </div>
    )
}