import React,{useState} from 'react'

export const DescripcionGame = ({numberPage}) => {

    const trailerGodOfWar = './sources/images/games/godOfWarTrailer.mp4'
    const trailerOutlats = './sources/images/games/outlatsTrailer.mp4'
    const trailerPayday3Trailer = './sources/images/games/payday3Trailer.mp4'

    const [gameData] = useState([
        {urlTrailer: trailerGodOfWar, name:"Nombre del juego", descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit a magni adipisci cumque, nihil quam natus eveniet dolorem labore qui!", desarrollador: "Desarrollador del juego", editor: "Editor del juego"},
        {urlTrailer: trailerGodOfWar, name:"God of War Ragnarök", descripcion:"Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök. Ahora también en PC.", desarrollador: "Santa Monica Studio, Jetpack Interactive", editor: "PlayStation Publishing LLC"},
        {urlTrailer: trailerOutlats, name:"Outlast", descripcion:"Hell is an experiment you can't survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you...", desarrollador: "Red Barrels", editor: "Red Barrels"},
        {urlTrailer: trailerPayday3Trailer, name:"PAYDAY 3", descripcion:"PAYDAY 3 es la muy esperada secuela de uno de los shooters cooperativos más populares que existen. Desde su lanzamiento, los jugadores de PAYDAY han disfrutado de la emoción de un trabajo perfectamente planeado y ejecutado.", desarrollador: "Starbreeze Studios", editor: "Deep Silver"},
    ])

    return (
    <section id="contentGame">
        <div id="imgGame">
            {<video autoPlay controls>
                <source src={gameData[numberPage].urlTrailer} type="video/mp4"/>
            </video>}
        </div>
        <div id="contentTextGame">
            <h2>{gameData[numberPage].name}</h2>
            <p>{gameData[numberPage].descripcion}</p>
            <p><strong>DESARROLLADOR:</strong></p>
            <p>{gameData[numberPage].desarrollador}</p>
            <p><strong>EDITOR:</strong></p>
            <p>{gameData[numberPage].editor}</p>
        </div>
    </section>
    )
}
