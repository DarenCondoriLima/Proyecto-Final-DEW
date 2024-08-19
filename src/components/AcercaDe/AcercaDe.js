import React from 'react'
import './acercaDe.css'

export const AcercaDe = () => {
  return (
    <main>
        <section id="contentQuienesSomos">
            <div id="contentQuienesSomosAling">
                <div>
                    <h2>¿Quienes somos?</h2>
                    <p>BPGames es una plataforma dedicada a comparar precios de videojuegos en diferentes tiendas digitales, como Steam, EpicGames, y otras. Nuestro sitio proporciona a los usuarios una manera rápida y sencilla de encontrar las mejores ofertas y descuentos disponibles, asegurando que puedan adquirir sus juegos favoritos al mejor precio.</p>
                </div>
            </div>
        </section>
        <hr/>
        <section id="contentQueOfrecemos">
            <div id="contentQueOfrecemosTitle">
                <h2>¿Que ofrecemos?</h2>
            </div>
            <div id="cards">
                <div className="card">
                    <div className="contentCard">
                        <img src="../images/logo.png" alt=""/>
                        <div>
                            <span>Comparación de Precios</span>
                            <p>Analizamos y comparamos precios de juegos en diferentes plataformas para que puedas elegir la opción más económica.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="contentCard">
                        <div>
                            <span>Actualizaciones en Tiempo Real</span>
                            <p>Nuestros datos se actualizan continuamente para proporcionarte la información más precisa y reciente.</p>
                        </div>
                        <img src="../images/logo.png" alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="contentCard">
                        <img src="../images/logo.png" alt=""/>
                        <div>
                            <span>Amplia Selección de Juegos</span>
                            <p>Desde los últimos lanzamientos hasta los clásicos favoritos, cubrimos una extensa va-riedad de títulos.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="contentCard">
                        <div>
                            <span>Ofertas y Descuentos</span>
                            <p>Destacamos las mejores ofertas y descuentos disponibles, ayudándote a ahorrar en ca-da compra.</p>
                        </div>         
                        <img src="../images/logo.png" alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="contentCard">
                        <img src="../images/logo.png" alt=""/>
                        <div>
                            <span>Reseñas y Valoraciones</span>
                            <p>Accede a reseñas y valoraciones de otros jugadores para tomar decisiones informadas sobre tus compras.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <section id="contentPorqueEscogernos">
            <div id="contentPorqueEscogernosText">
                <h2>¿Por qué escoger BPGames?</h2>
                <ul>
                    <li>Ahorro Garantizado: Comparando precios en múltiples plataformas, aseguramos que siempre obtengas el mejor trato posible.</li>
                    <li>Actualizaciones en Tiempo Real: Ofrecemos datos precisos y actualizados constantemente para reflejar las últimas ofertas y descuentos.</li>
                    <li>Facilidad de Uso: Con una interfaz intuitiva, encontrar el mejor precio para tus juegos favoritos es rápido y sencillo.</li>
                    <li>Variedad y Cobertura: Cubrimos una amplia gama de títulos, desde nuevos lanzamientos hasta clásicos, en todas las plataformas principales.</li>
                    <li>Confiabilidad y Seguridad: Solo enlazamos a tiendas digitales de confianza, garantizando compras seguras y legítimas.</li>
                </ul>
            </div>
        </section>
    </main>
  )
}
