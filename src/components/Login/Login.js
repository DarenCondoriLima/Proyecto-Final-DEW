import React from 'react';
import { Link , useNavigate  } from 'react-router-dom';
import './login.css';

export const Login = ({login}) => {

  const imgUser = './sources/images/usericon.png';
  const imgPassword = './sources/images/passwordicon.png';

  const navigate = useNavigate();

  const handleLogin = () => {
    
    const user = document.getElementById('loginUser-login').value;
    const password = document.getElementById('loginPassword-login').value;

    if (user === "admin" && password === "admin") {
      login();
      setTimeout(() => {
        navigate('/');
      }, 100); 
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <main>
      <section id="contentForm-login">
        <div id="contentFormBackground-login">
          <div id="contentFormBackgroundAling-login">
            <div id="formName-login" className="form-login">
              <div className="formContents-login">
                <img src={imgUser} alt="Logo"/>
                <input id="loginUser-login" type="text" placeholder="Usuario"/>
              </div>
            </div>
            <div id="formPassword-login" className="form-login">
              <div className="formContents-login">
                <img src={imgPassword} alt="Logo"/>
                <input id="loginPassword-login" type="password" placeholder="Contraseña"/>
              </div>            
            </div>
            <div id="formButtons-login">
              <input type="button" value="Iniciar sesión" onClick={handleLogin}/>
              <Link to="/register">Registrarse</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
