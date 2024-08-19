import React, { useState } from 'react';

export const QuestionsAnswersSupport = () => {
    // Estado para manejar la visibilidad de cada tarjeta y el ícono
    const [cardsState, setCardsState] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    const changeIcon = (numberCard) => {
        // Toggle el estado del ícono y la visibilidad del texto
        setCardsState((prevState) => ({
            ...prevState,
            [numberCard]: !prevState[numberCard],
        }));
    };

    const renderIcon = (isOpen) => {
        return (
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="6" fill="none" />
                <rect x="20" y="45" width="60" height="10" rx="5" ry="5" fill="black" />
                {!isOpen && (
                    <rect x="45" y="20" width="10" height="60" rx="5" ry="5" fill="black" />
                )}
            </svg>
        );
    };

    return (
        <section id="contentPreguntas">
            <div id="contentPreguntasAling">
                <h2>Preguntas frecuentes</h2>
                <div id="cards-support">
                    {[
                        { id: 1, question: '¿Es gratis usar BPGames?', answer: 'Sí, nuestro servicio es completamente gratuito para los usuarios. No cobramos ninguna tarifa por comparar precios ni por utilizar nuestra plataforma.' },
                        { id: 2, question: '¿Cómo aseguran la confiabilidad de las ofertas?', answer: 'Solo enlazamos a tiendas digitales reconocidas y de confianza, garantizando que todas las ofertas y descuentos sean legítimos y seguros.' },
                        { id: 3, question: '¿Puedo comprar directamente en BPGames?', answer: 'No, BPGames no vende videojuegos directamente. Te proporcionamos enlaces a las tiendas donde puedes comprar los juegos al mejor precio.' },
                        { id: 4, question: '¿Qué tipo de juegos puedo encontrar en BPGames?', answer: 'Cubrimos una amplia variedad de títulos, desde los últimos lanzamientos hasta los clásicos favoritos, en múltiples géneros y plataformas.' },
                        { id: 5, question: '¿Qué hago si encuentro un problema con un enlace o precio?', answer: 'Si encuentras un problema con algún enlace o precio, por favor infórmanos a través de nuestro formulario de contacto, y trabajaremos para solucionarlo lo antes posible.' },
                    ].map((card) => (
                        <div key={card.id} className="card-support">
                            <div className="cardTitle">
                                <h3>{card.question}</h3>
                                <div className="icon" onClick={() => changeIcon(card.id)}>
                                    {renderIcon(cardsState[card.id])}
                                </div>
                                <hr/>
                            </div>
                            <p style={{ display: cardsState[card.id] ? 'block' : 'none' }}>{card.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
