import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Home }from '../Home/Home';
import { Games } from '../Games/Games';
import { AcercaDe } from '../AcercaDe/AcercaDe';
import { Support } from '../Support/Support';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { User } from '../User/User';
import { WishList } from '../WishList/WishList';
import { Game } from '../Game/Game';

export const Approuter = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
        console.log(`loggedIn: ${loggedIn}`)
      };
    
    const logout = (path) => {
        setLoggedIn(false);
        console.log("Path " + path)
    };

  return (
    <Router>
      <Header loggedIn={loggedIn} logout={logout}/>
      <section className="header"></section>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/acercaDe' element={<AcercaDe/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login login={login}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/game' element={<Game NumberPage={0} />}/>
        <Route path='/godofwar' element={<Game NumberPage={1} />}/>
        <Route path='/outlast' element={<Game NumberPage={2} />}/>
        <Route path='/payday3' element={<Game NumberPage={3} />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
