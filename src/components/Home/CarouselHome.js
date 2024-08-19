import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

export const CarouselHome = () => {

  const godOfWarBanner = './sources/images/games/godOfWarBanner.jpg';
  const payday3Banner = './sources/images/games/payday3Banner.webp';
  const outlastBanner = './sources/images/games/outlastBanner.png';

  const carouselRef = useRef(null); // Referencia al contenedor del carrusel
  const imagesRef = useRef(null);   // Referencia a las imágenes
  const currentIndex = useRef(0);   // Índice de la imagen actual
  const intervalRef = useRef(null); // Referencia al intervalo

  useEffect(() => {
    const carouselImages = carouselRef.current.querySelector('.carousel-images');
    const images = carouselRef.current.querySelectorAll('.carousel-images a');
    const prevButton = carouselRef.current.querySelector('.prev');
    const nextButton = carouselRef.current.querySelector('.next');

    function showImage(index) {
      const offset = -index * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function startCarousel() {
      intervalRef.current = setInterval(() => {
        currentIndex.current = (currentIndex.current + 1) % images.length;
        showImage(currentIndex.current);
      }, 3000); // Cambia cada 3 segundos
    }

    function stopCarousel() {
      clearInterval(intervalRef.current);
    }

    nextButton.addEventListener('click', () => {
      stopCarousel();
      currentIndex.current = (currentIndex.current - 1 + images.length) % images.length;
      showImage(currentIndex.current);
      startCarousel();
    });

    prevButton.addEventListener('click', () => {
      stopCarousel();
      currentIndex.current = (currentIndex.current + 1) % images.length;
      showImage(currentIndex.current);
      startCarousel();
    });

    startCarousel();

    return () => {
      stopCarousel();
      prevButton.removeEventListener('click', () => {});
      nextButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <section id="contentSlider" ref={carouselRef}>
      <div className="carousel">
        <div className="carousel-images">
          <Link to="#"><img src={godOfWarBanner} alt="God of War Banner"/></Link>
          <Link to="#"><img src={payday3Banner} alt="Payday 3 Banner"/></Link>
          <Link to="#"><img src={outlastBanner} alt="Outlast Banner"/></Link>
        </div>
        <button className="prev">&#10094;</button>
        <button className="next">&#10095;</button>
      </div>
    </section>
  );
}
