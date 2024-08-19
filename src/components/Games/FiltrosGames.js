import React from 'react'

export const FiltrosGames = () => {
    let filtros = ["Acción","Aventura","Carreras","Cartas","Casual","Comedia","Construcción","Deportes","Estrategia","Exploración","RPG","Supervivencia","Terror"]; 
  return (
    <section id="contentFilter">
                <div id="contentPrice">
                    <span id="titleFilter">Precio</span>
                    <div id="contentElementPrices">
                        <div className="elementFilterPrice">
                            <span>Precio mínimo</span>
                            <span>Precio máximo</span>
                        </div>
                        <div className="elementFilterPrice">
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div id="generos">
                    <span id="titleFilter">Géneros</span>
                    {
                        filtros.map( (filtro, index) => {
                            return(<a key={index} href="#" className="itemGeneros">{filtro}</a>)
                        })
                    }
                </div>     
            </section>
  )
}
