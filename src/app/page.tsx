'use client'

import * as React from 'react';
import EmblaCarousel from '@/containers/categories/categories';
import { EmblaOptionsType } from 'embla-carousel-react';
import About from '@/containers/about/about';
import Search from '@/containers/search/search';
import WelcomeImage from '@/components/welcomeImage/welcomeImage';


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
    <body> 
      <main>
        <div className='WelcomeCard'>
          <WelcomeImage/>
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
