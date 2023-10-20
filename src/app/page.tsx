'use client'

import * as React from 'react';
import Image from 'next/image';
import welcome from '../images/tipos-de-carros-capa.png';
import Header from '../components/header/header';
import SearchBox from '@/components/searchBox/searchBox';
import EmblaCarousel from '@/containers/categories/categories';
import { EmblaOptionsType } from 'embla-carousel-react';
import About from '@/containers/about/about';
import Search from '@/containers/search/search';

const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function Home() {
  return (
    <>
    <head>
      <meta charSet='utf-8' />
      <title>Pagina Inicial</title>
    </head>
    <Header/>
    <body> 
      <main>
        <div className='WelcomeCard'>
          <Image
          className='WelcomeImage'
          src={welcome}
          alt='Cartão de visita'
          width={2000}
          height={20}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={false}/>
          <text className='ImportantText'>
            Todos os carros, um só lugar
            </text>
        </div>
        <Search/>
        <div className='Categories'>
          <h1> Categorias </h1>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <About/>
      </main>
    </body>
    </>
  )
}
