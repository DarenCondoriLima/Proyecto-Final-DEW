import React from 'react'
import './home.css'
import { useLocation } from 'react-router-dom';
import { CarouselHome } from './CarouselHome'
import { CardsHome } from './CardsHome'

export const Home = () => {
  return (
    <main>
        <CarouselHome/>
        <CardsHome/>
    </main>
  )
}