import React from "react"

export const FiltrosWishList = () =>{
    return(
        <div id="contentFilter-wishList">
            <div id="contentFilterSearch-wishList">
                <input type="text" id="search" placeholder="Busque un juego..."/>
                <svg viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
            </div>
            <div id="contentElementsOrder-wishList">
                <span id="contentFilterTitle-wishList">Ordenar por:</span>
                <div id="contentElementsFilterOrder-wishList">
                    <div>
                        <span>Precio mayor a menor</span>
                        <input type="radio" name="priceOrder"/>
                    </div>
                    <div>
                        <span>Precio menor a mayor</span>
                        <input type="radio" name="priceOrder"/>
                    </div>
                </div>
                <div id="generos">
                    <span id="contentFilterTitle-wishList">Géneros</span>
                    <div id="contentFilterGenres-wishList">
                        <div id="contentElementsFilterGenres-wishList">
                            <a href="#" className="itemGeneros">Acción</a>
                            <a href="#" className="itemGeneros">Aventura</a>
                            <a href="#" className="itemGeneros">Carreras</a>
                            <a href="#" className="itemGeneros">Cartas</a>
                            <a href="#" className="itemGeneros">Casual</a>
                            <a href="#" className="itemGeneros">Comedia</a>
                            <a href="#" className="itemGeneros">Construcción</a>
                            <a href="#" className="itemGeneros">Deportes</a>
                            <a href="#" className="itemGeneros">Estrategia</a>
                            <a href="#" className="itemGeneros">Exploración</a>
                            <a href="#" className="itemGeneros">RPG</a>
                            <a href="#" className="itemGeneros">Supervivencia</a>
                            <a href="#" className="itemGeneros">Terror</a>
                        </div>
                        <div id="contentElementsFilterGenresNumber-wishList">
                            <span>(0)</span>
                            <span>(0)</span>
                            <span>(2)</span>
                            <span>(3)</span>
                            <span>(0)</span>
                            <span>(1)</span>
                            <span>(0)</span>
                            <span>(0)</span>
                            <span>(0)</span>
                            <span>(0)</span>
                            <span>(0)</span>
                            <span>(8)</span>
                            <span>(5)</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}