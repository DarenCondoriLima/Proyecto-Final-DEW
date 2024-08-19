import React from 'react';
import { Link } from 'react-router-dom';

export const CardsWishList = () => {

  const godOfWarIcon = './sources/images/games/godOfWarIcon.png';
  const payday3Icon = './sources/images/games/payday3Icon.webp';
  const outlatsIcon = './sources/images/games/outlatsIcon.webp';
  const subnautica = './sources/images/iconsGames/subnautica.png';
  const mortalkombat1 = './sources/images/iconsGames/mortalkombat1.png';

  const games = [
    { ruta: "/godofwar", icono: godOfWarIcon, titulo: "God of War Ragnarök", precio: "199.00" },
    { ruta: "/payday3", icono: payday3Icon, titulo: "PAYDAY 3", precio: "50.00" },
    { ruta: "/outlast", icono: outlatsIcon, titulo: "Outlast", precio: "6.45" },
    { ruta: "/game", icono: subnautica, titulo: "Subnautica", precio: "63.00" },
    { ruta: "/game", icono: mortalkombat1, titulo: "Mortal Kombat 1", precio: "208.00" },
  ];

  return (
    <div id="contentGames">
      {games.map((game, index) => (
        <Link key={index} className="card-wishList" to={game.ruta}>
          <img src={game.icono} alt={game.titulo} />
          <p>{game.titulo}</p>
          <span>S/.{game.precio}</span>
        </Link>
      ))}
      <div id="numberPage-wishList">
        <Link to="#">
          <svg id="arrow-left-wishList" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="25" />
            <path d="M26.5,25.31,16,33.36a5,5,0,0,0-1.45,5.09c.9,2.22,4.47,3.54,7.73,1.71L39.14,28.28c.18-.13,2-1.46,1.86-3.29v.38c.15-1.83-1.68-3.16-1.86-3.29L22.29,10.2c-3.26-1.83-6.83-.51-7.73,1.71A5,5,0,0,0,16,17L26.5,25.05Z" style={{ fill: '#fff' }} />
          </svg>
        </Link>
        <ul>
          <li><Link to="#">1</Link></li>
          <li><Link to="#">2</Link></li>
          <li><Link to="#">3</Link></li>
          <li><Link to="#">4</Link></li>
          <li><Link to="#">5</Link></li>
        </ul>
        <Link to="#">
          <svg id="arrow-right-wishList" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="25" />
            <path d="M26.5,25.31,16,33.36a5,5,0,0,0-1.45,5.09c.9,2.22,4.47,3.54,7.73,1.71L39.14,28.28c.18-.13,2-1.46,1.86-3.29v.38c.15-1.83-1.68-3.16-1.86-3.29L22.29,10.2c-3.26-1.83-6.83-.51-7.73,1.71A5,5,0,0,0,16,17L26.5,25.05Z" style={{ fill: '#fff' }} />
          </svg>
        </Link>
      </div>
    </div>
  );
};
