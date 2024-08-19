import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './register.css';

export const Register = () => {

    const imgUser = './sources/images/usericon.png';
    const imgEmail = './sources/images/emailicon.png';
    const imgPassword = './sources/images/passwordicon.png';

    // Estado para almacenar el nombre del archivo seleccionado
    const [fileName, setFileName] = useState('No hay archivo seleccionado');

    // Función para manejar el cambio en el input de archivo
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        } else {
            setFileName('No hay archivo seleccionado');
        }
    };

    return (
        <main>
            <section id="contentForm-register">
                <div id="contentFormBackground-register">
                    <div id="contentFormBackgroundAling-register">
                        <div id="formName-register" className="form-register">
                            <div className="formContent-register">
                                <div>
                                    <img src={imgUser} alt="Icono"/>
                                    <input type="text" placeholder="Nombres"/>
                                </div>
                            </div>
                            <div className="formContent-register">
                                <div>
                                    <img src={imgUser} alt="Icono"/>
                                    <input type="text" placeholder="Apellidos"/>
                                </div>
                            </div>
                        </div>
                        <div id="formEmail-register" className="form-register">
                            <div className="formContent-register formContentEmail-register">
                                <div>
                                    <img src={imgEmail} alt="Icono"/>
                                    <input id='emailContent' type="text" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div id="formPassword-register" className="form-register">
                            <div className="formContent-register">
                                <div>
                                    <img src={imgPassword} alt="Icono"/>
                                    <input type="password" placeholder="Contraseña"/>                                  
                                </div>
                            </div>
                            <div className="formContent-register">
                                <div>
                                    <img src={imgPassword} alt="Icono"/>
                                    <input type="password" placeholder="Confirme su contraseña"/>           
                                </div>
                            </div>
                        </div>
                        <div id="formFile-register" className="form-register">
                            <div className="formContent-register formContentFile-register">
                                <input type="file" id="fileInput" onChange={handleFileChange}/>
                                <label htmlFor="fileInput" id="fileLabel">Seleccionar su imagen de perfil</label>
                                <span id="fileName">{fileName}</span>
                            </div>
                        </div>
                        <div id="formButtons-register">
                            <input type="button" value="Registrarse"/>
                            <Link to="/login">Iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};