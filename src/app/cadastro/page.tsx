'use client'

import React from "react";
import {Input} from "@nextui-org/react";
import { useState, FormEvent } from 'react';
import WelcomeImage from '@/components/welcomeImage/welcomeImage';
import styles from './styles.module.css'
import Header from '@/components/header/header';
import { HiMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2';
import { redirect } from 'next/navigation' 


const Cadastro = () => {
  const [nome, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  const handleClick = () =>{
    window.location.replace("/login");
  }
  
  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Construa o objeto de dados a ser enviado para o backend
    const data = {
      nome,
      email,
      senha,
      confSenha,
    };

    try {
      // Envie os dados para o backend usando a API fetch ou outra biblioteca de sua escolha
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Lide com a resposta do backend, se necessário
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error);
    }
  };

  const [value, setValue] = React.useState("junior2nextui.org");

  const validateEmail = (value: String) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div>
      <div>
        <header />
      </div>

      <div className={styles.container}>
        <div className={styles.areaLogin}>
          <form onSubmit={handleSubmit}>
            <div className={styles.divCima}>
              <div className={styles.cimaEsquerda}>
                <input
                  className={styles.usuario}
                  type='text'
                  name='usuario'
                  placeholder='Usuário'
                  value={nome}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                  className={styles.email}
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className={styles.cimaDireita}>
                <input
                  className={styles.senha}
                  type='password'
                  name='senha'
                  placeholder='Senha'
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                
                <input
                  className={styles.senha2}
                  type='password'
                  name='confSenha'
                  placeholder='Confirma Senha'
                  value={confSenha}
                  onChange={(e) => setConfSenha(e.target.value)}
                />
                <button className={styles.botaoEntr} type='submit' onClick={handleClick}>
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
          <div className={styles.divBaixo}>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
