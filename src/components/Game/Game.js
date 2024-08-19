import React from 'react'
import './game.css'
import { DescripcionGame } from './DescripcionGame'
import { CardsGame } from './CardsGame'
import { RequisitosGame } from './RequisitosGame'

export const Game = ({NumberPage}) =>{
    return(
        <main>
            <DescripcionGame numberPage={NumberPage} />
            <CardsGame numberPage={NumberPage} />
            <RequisitosGame numberPage={NumberPage} />
        </main>
    )
}