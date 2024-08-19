import React, { useState } from 'react';
import './user.css';

export const User = () => {

  const userImg = './sources/images/user.png';

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Nombre del Usuario',
    lastname: 'Apellidos del Usuario',
    email: 'example@gmail.com',
    password: '*************'
  });

  const [backupData, setBackupData] = useState({ ...userData });

  const handleEdit = () => {
    setBackupData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUserData(backupData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <main>
      <section id="contentDatos">
        <div id="contentDatosAling">
          <img src={userImg} alt="User" />
          <div id="contentDatosUser">
            <div id="contentName">
              <div>
                <span>Nombres</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    className="datoUserInput"
                    value={userData.name}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="datoUser" id="datoUserName">{userData.name}</span>
                )}
              </div>
              <div>
                <span>Apellidos</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastname"
                    className="datoUserInput"
                    value={userData.lastname}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="datoUser" id="datoUserLastname">{userData.lastname}</span>
                )}
              </div>
            </div>
            <div id="contentEmail" className="datosItem">
              <span>Email</span>
              {isEditing ? (
                <input
                  type="text"
                  name="email"
                  className="datoUserInput"
                  value={userData.email}
                  onChange={handleChange}
                />
              ) : (
                <span className="datoUser" id="datoUserEmail">{userData.email}</span>
              )}
            </div>
            <div id="contentEmail" className="datosItem">
              <span>Contraseña</span>
              {isEditing ? (
                <input
                  type="text"
                  name="password"
                  className="datoUserInput"
                  value={userData.password}
                  onChange={handleChange}
                />
              ) : (
                <span className="datoUser" id="datoUserPassword">{userData.password}</span>
              )}
            </div>
            <div id="contentEmail" className="datosItem">
              <span>Fecha de creación de la cuenta</span>
              <span>20/07/2024</span>
            </div>
          </div>
        </div>
        <div id="contentButtonAling">
          {!isEditing ? (
            <input className="datoUser" type="button" value="Editar datos" onClick={handleEdit} />
          ) : (
            <>
              <input className="buttonEdit" type="button" value="Guardar datos" onClick={handleSave} />
              <input className="buttonEdit buttonCancelar" type="button" value="Cancelar" onClick={handleCancel} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
