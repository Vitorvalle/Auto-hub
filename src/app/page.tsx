'use client'

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import welcome from '../images/tipos-de-carros-capa.png';
import Header from '../components/header/header';
import {Button} from '@nextui-org/button';
import SearchBox from '@/components/searchBox/searchBox';
import Categories from '@/containers/categories/categories';
import EmblaCarousel from '@/containers/categories/categories';
import { EmblaOptionsType } from 'embla-carousel-react';

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
          <div className='WelcomeImage'>
          <Image
          src={welcome}
          alt='Cartão de visita'
          width={2000}
          height={20}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={false}/>
          </div> 
          <div className='ImportantText'>
            <h1>Todos os carros, um só lugar</h1>
          </div>
        </div>
        <div>
          <SearchBox/>
        </div>
        <div className='Categories'>
          <h1> Categorias </h1>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </main>
    </body>
    </>
  )
}
