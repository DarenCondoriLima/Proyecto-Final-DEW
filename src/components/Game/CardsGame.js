import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const CardsGame = ({numberPage}) => {

    const steamLogo = './sources/images/steam.svg';
    const epicGames = './sources/images/epicGames.svg';
    const xbox = './sources/images/xbox.svg';
    const playstation = './sources/images/playstation.svg';
    const nintendo = './sources/images/nintendo.svg';
    const finalFantasyVII = './sources/images/iconsGames/finalFantasyVII.png';
    const subnautica = './sources/images/iconsGames/subnautica.png';
    const f124 = './sources/images/iconsGames/f124.png';
    const mortalkombat1 = './sources/images/iconsGames/mortalkombat1.png';
    const deadSpace = './sources/images/iconsGames/deadSpace.webp';
    const cyberpunk2077 = './sources/images/iconsGames/cyberpunk2077.png';

    const [storeData] = useState([
        {stores: [
            {img: steamLogo,name:'Steam',price:'60.00',url:"#"},
            {img: epicGames,name:'EpicGames',price:'78.99',url:"#"},
            {img: xbox,name:'Xbox',price:'80.33',url:"#"},
            {img: playstation,name:'Play Station',price:'93.40',url:"#"},
            {img: nintendo,name:'Nintendo Switch',price:'95.50',url:"#"}
        ]},
        {stores: [
            {img: steamLogo,name:'Steam',price:'199.00',url:"https://store.steampowered.com/app/2322010/God_of_War_Ragnark/"},
            {img: epicGames,name:'EpicGames',price:'199.00',url:"https://store.epicgames.com/en-US/p/god-of-war-ragnarok-3ca641"},
            {img: playstation,name:'Play Station',price:'268.14',url:"https://www.playstation.com/es-mx/games/god-of-war-ragnarok/"},
        ]},
        {stores: [
            {img: steamLogo,name:'Steam',price:'6.45',url:"https://store.steampowered.com/app/238320/Outlast/"},
            {img: epicGames,name:'EpicGames',price:'38.99',url:"https://store.epicgames.com/es-ES/p/outlast"},
            {img: xbox,name:'Xbox',price:'60.33',url:"https://www.xbox.com/es-MX/games/store/outlast/bp3gh4d3hp2h"},
            {img: playstation,name:'Play Station',price:'76.40',url:"https://www.playstation.com/es-ar/games/outlast/"},
            {img: nintendo,name:'Nintendo Switch',price:'95.50',url:"https://www.nintendo.com/us/store/products/outlast-bundle-of-terror-switch/"}
        ]},
        {stores: [
            {img: steamLogo,name:'Steam',price:'50.00',url:"https://store.steampowered.com/app/1272080/PAYDAY_3/"},
            {img: playstation,name:'Play Station',price:'76.40',url:"https://www.playstation.com/es-mx/games/payday-3/"},
            {img: epicGames,name:'EpicGames',price:'100.00',url:"https://store.epicgames.com/en-US/p/payday-3"},
            {img: xbox,name:'Xbox',price:'152.83',url:"https://www.xbox.com/en-US/games/store/payday-3/9NPZVDCH73SX/0010"}
        ]}
    ])
    const [otherGames] = useState([
        {img: finalFantasyVII, name:'FINAL FANTASY VII', link: "#"},
        {img: subnautica, name:'Subnautica'},
        {img: f124, name:'F1® 24'},
        {img: mortalkombat1, name:'Mortal Kombat 1'},
        {img: deadSpace, name:'Dead Space'},
        {img: cyberpunk2077, name:'Cyberpunk 2077'}
    ])
  return (
    <section id="contentcards-Game">
        <div id="contentPrincipalCards-Game">
            <div id="principalCardsTitle-Game">
                <span>Tienda</span>
                <span>Precio</span>
            </div>
            <div id="principalCards-Game">
                {
                    storeData[numberPage].stores.map((data, index) =>(
                        <Link to={data.url} class="card-Game" key={index}>                       
                            <img src={data.img}/>
                            <span class="nameStore-Game">{data.name}</span>
                            <span class="price-Game">{"S/."+ data.price}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
        <aside id="contentSideCards-Game">
            <span id="titleSideCards-Game">Juegos Similares</span>
            <div id="sideCards-Game">
                {
                    otherGames.map((item, index)=>(
                        <Link to="#" class="sideCard-Game" key={index}>
                            <img src={item.img}/>
                            <h2>{item.name}</h2>
                        </Link> 
                    ))
                }
            </div>
        </aside>
    </section>
  )
}
