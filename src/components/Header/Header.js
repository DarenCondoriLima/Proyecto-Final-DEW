import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = ({ loggedIn, logout }) => {
  const userImg = './sources/images/user.png';
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  const isActiveUser = (path) => {
    return location.pathname === path ? 'activeUser' : '';
  };
  const locationPath = () => {
    logout();
    if(location.pathname === '/user' || location.pathname == '/wishlist'){
      navigate('/');
    }
  }

  return (
    <header>          
      <Link to="/" id="logo">
        <img src="/logo.png" alt="Logo"/>
      </Link>
      <nav id="menu">
        <ul>
          <li className={isActive('/')}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={isActive('/games')}>
            <Link to="/games">Juegos</Link>
          </li>
          <li className={isActive('/acercaDe')}>
            <Link to="/acercaDe">Acerca de</Link>
          </li>
          <li className={isActive('/support')}>
            <Link to="/support">Soporte</Link>
          </li>
          {!loggedIn ? (
            <li id="menuLogin" className={isActive('/login')}>
              <Link to="/login">Iniciar sesión</Link>
              <ul id="subMenu">
                <li className={isActive('/register')}>
                  <Link to="/register">Registraté</Link>
                </li>
              </ul>
            </li>
          ) : (
            <li id="menuUser">
              <Link to="/user"><img src={userImg} alt="User"/></Link>
              <ul>
                <li className={isActiveUser('/user')}>
                  <Link to="/user">Mi perfil</Link>
                </li>
                <li className={isActiveUser('/wishlist')}>
                  <Link to="/wishlist">Lista de deseos</Link>
                </li>
                <li onClick={locationPath}>Cerrar sesión</li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};