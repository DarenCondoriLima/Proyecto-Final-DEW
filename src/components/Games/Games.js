import React from 'react'
import './games.css'
import { SearchGames } from './SearchGames'
import { FiltrosGames } from './FiltrosGames';
import { CardsGames } from './CardsGames';

export const Games = () => {
    return (
      <main>
        <SearchGames/>
        <section id="contentPrincipal">
            <FiltrosGames/>
            <CardsGames/>   
        </section>
      </main>
    );
  };
