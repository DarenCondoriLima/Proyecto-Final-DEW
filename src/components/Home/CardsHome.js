import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const CardsHome = () => {

    const godOfWarIcon = './sources/images/games/godOfWarIcon.png';
    const payday3Icon = './sources/images/games/payday3Icon.webp';
    const outlatsIcon = './sources/images/games/outlatsIcon.webp';
    const finalFantasyVII = './sources/images/iconsGames/finalFantasyVII.png';
    const avatar = './sources/images/iconsGames/avatar.png';
    const f124 = './sources/images/iconsGames/f124.png';
    const starWars = './sources/images/iconsGames/starWars.png';
    const civilizationVI = './sources/images/iconsGames/civilizationVI.webp';
    const deadSpace = './sources/images/iconsGames/deadSpace.webp';
    const imortals = './sources/images/iconsGames/imortals.png';
    const cyberpunk2077 = './sources/images/iconsGames/cyberpunk2077.png';
    const mortalkombat1 = './sources/images/iconsGames/mortalkombat1.png';

    const [gamedata] = useState([
        {ruta: "/godofwar", icono: godOfWarIcon, titulo: "God of War Ragnarök", precio: "199.00"},
        {ruta: "/payday3", icono: payday3Icon, titulo: "PAYDAY 3", precio: "50.00"},
        {ruta: "/outlast", icono: outlatsIcon, titulo: "Outlast", precio: "6.45"},
        {ruta: "/game", icono: finalFantasyVII, titulo: "FINAL FANTASY VII", precio: "279.00"},
        {ruta: "/game", icono: avatar, titulo: "Avatar: Frontiers of Pandora", precio: "259.99"},
        {ruta: "/game", icono: f124, titulo: "F1® 24", precio: "259.00"},
        {ruta: "/game", icono: starWars, titulo: "STAR WARS Jedi: Survivor™", precio: "259.00"},
        {ruta: "/game", icono: civilizationVI, titulo: "Sid Meier's Civilization® VI", precio: "239.00"},
        {ruta: "/game", icono: deadSpace, titulo: "Dead Space", precio: "219.00"},
        {ruta: "/game", icono: imortals, titulo: "Immortals of Aveum™", precio: "219.00"},
        {ruta: "/game", icono: cyberpunk2077, titulo: "Cyberpunk 2077", precio: "209.99"},
        {ruta: "/game", icono: mortalkombat1, titulo: "Mortal Kombat 1", precio: "208.00"}
    ]);
    
    return (
    <section id="contentCards-home">
            <h1>Juegos Populares</h1>
            <section id="cards-home">
                {
                    gamedata.map((data, index)=>(
                        <div key={index} className="card-home">
                            <Link to={data.ruta}>
                                <img src={data.icono}/>
                                <div>
                                    <h2>{data.titulo}</h2>
                                    <p>S/.{data.precio}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}
