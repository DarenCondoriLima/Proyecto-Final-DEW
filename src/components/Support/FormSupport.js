import React, { useState } from 'react'

export const FormSupport = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
  
    const handleSubmit = () => {
      console.log('Nombre:', name);
      console.log('Correo:', email);
      console.log('Pregunta:', question);
    };
  
    return (
      <form id="contentForm-support">
        <div id="contentFormAling-support">
          <h2>¿Tienes otra pregunta?</h2>
          <div id="formInputs-support">
            <div id="formTitles-support" className="form-support">
              <h3>Nombre</h3>
              <h3>Correo</h3>
            </div>
            <div id="formText-support" className="form-support">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Escribe tu nombre"/>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Escribe tu correo"/>
            </div>
          </div>
          <div id="formQuestion-support">
            <div>
              <h3>¿Cuál es tu pregunta?</h3>
            </div>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Escribe tu pregunta"
            ></textarea>
          </div>
        </div>
        <div id="formButton-support">
            <input type="button" value="Enviar" onClick={handleSubmit}/>
        </div>
      </form>
    );
}
