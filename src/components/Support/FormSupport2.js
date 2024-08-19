import React, { useState } from 'react'

export const FormSupport2 = () => {
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
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
            <div id="formQuestion-support">
                <div>
                    <h3>¿Cúal es tú pregunta?</h3>
                </div>
                <textarea ></textarea>
            </div>
        </div>
        <div id="formButton-support">
            <input type="button" value="Enviar"/>
        </div>
    </form>
  )
}
