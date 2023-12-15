import { useEffect, useRef  } from 'react';

import PrincipalPage1 from './ruta/a/la/PrincipalPage1.jpg';
import PrincipalPage2 from './ruta/a/la/PrincipalPage2.jpg';
import PrincipalPage3 from './ruta/a/la/PrincipalPage3.jpg';
import PrincipalPage4 from './ruta/a/la/PrincipalPage4.jpg';

import "../Styles/PrincipalPage.css";
import CarouselItem from "./CarouselItem";

const HeroSection = () => {
        
    const carouselDomRef = useRef(null);
    const listItemDomRef = useRef(null);
    const thumbnailDomRef = useRef(null);

    useEffect(() => {
        const nextDom = document.getElementById('next-hs');
        const prevDom = document.getElementById('prev-hs');

        const carousel = document.querySelector('.carousel-hs');
        const list = document.querySelector('.carousel-hs .list-hs');
        const thumbnail = document.querySelector('.carousel-hs .thumbnail-hs');

        if (nextDom && prevDom && carousel && list && thumbnail) {
            carouselDomRef.current = carousel;
            listItemDomRef.current = list;
            thumbnailDomRef.current = thumbnail;

            nextDom.addEventListener('click', () => showSlider('next-hs'));
            prevDom.addEventListener('click', () => showSlider('prev-hs'));

            return () => {
                nextDom.removeEventListener('click', () => showSlider('next-hs'));
                prevDom.removeEventListener('click', () => showSlider('prev-hs'));
            };
        }
    }, []); // Se ejecuta solo una vez después del montaje

    const timeRunning = 3000;
    let runTimeOut;

    function showSlider(type) {
        const itemSlider = document.querySelector('.carousel-hs .list-hs');
        const itemThumbnail = document.querySelector('.carousel-hs .thumbnail-hs');

        if (type === 'next-hs' && carouselDomRef.current && listItemDomRef.current && thumbnailDomRef.current) {
            const firstClone = itemSlider?.firstElementChild?.cloneNode(true);
            const firstThumbnailClone = itemThumbnail?.firstElementChild?.cloneNode(true);

            if (firstClone && firstThumbnailClone) {
                listItemDomRef.current.appendChild(firstClone);
                thumbnailDomRef.current.appendChild(firstThumbnailClone);

                const firstElementChildSlider = itemSlider?.firstElementChild;
                if (firstElementChildSlider) {
                    listItemDomRef.current.removeChild(firstElementChildSlider);
                }

                const firstElementChildThumbnail = itemThumbnail?.firstElementChild;
                if (firstElementChildThumbnail) {
                    thumbnailDomRef.current.removeChild(firstElementChildThumbnail);
                }

                carouselDomRef.current.classList.add('next-hs');

                setTimeout(() => {
                    carouselDomRef.current.classList.remove('next-hs');
                }, 500); // Ajusta el tiempo según la duración de la animación
            }
        } else if (type === 'prev-hs' && carouselDomRef.current && listItemDomRef.current && thumbnailDomRef.current) {
            const lastClone = itemSlider?.lastElementChild?.cloneNode(true);
            const lastThumbnailClone = itemThumbnail?.lastElementChild?.cloneNode(true);

            if (lastClone && lastThumbnailClone) {
                listItemDomRef.current.prepend(lastClone);
                thumbnailDomRef.current.prepend(lastThumbnailClone);

                listItemDomRef.current.removeChild(itemSlider?.lastElementChild);
                thumbnailDomRef.current.removeChild(itemThumbnail?.lastElementChild);

                carouselDomRef.current.classList.add('prev-hs');

                setTimeout(() => {
                    carouselDomRef.current.classList.remove('prev-hs');
                }, 500); // Ajusta el tiempo según la duración de la animación
            }
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            // Se Puede ajustar otras cosas aquí si es necesario
        }, timeRunning);
    }
    
    return (     
        <div className="container-principal-page">
            <section className="slide-arriba" >
                {/* Carrousel */}
                <div className="carousel-hs">
                    {/* list item */}
                    <div className="list-hs">
                        <CarouselItem
                            imageSrc={PrincipalPage1}
                            author="Las"
                            title="Hermosas vistas"
                            topic="De Génova"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam molestias obcaecati? Eaque modi et hic libero repellendus animi, atque, debitis impedit autem voluptas ex provident voluptatum, voluptate at porro."
                        />
                        <CarouselItem 
                            imageSrc={PrincipalPage2}
                            author="Las"
                            title="Hermosas vistas"
                            topic="De Génova"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam molestias obcaecati? Eaque modi et hic libero repellendus animi, atque, debitis impedit autem voluptas ex provident voluptatum, voluptate at porro."
                        />
                        <CarouselItem 
                            imageSrc={PrincipalPage3}
                            author="Las"
                            title="Hermosas vistas"
                            topic="De Génova"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam molestias obcaecati? Eaque modi et hic libero repellendus animi, atque, debitis impedit autem voluptas ex provident voluptatum, voluptate at porro."
                        />
                        <CarouselItem 
                            imageSrc={PrincipalPage4}
                            author="Las"
                            title="Hermosas vistas"
                            topic="De Génova"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam molestias obcaecati? Eaque modi et hic libero repellendus animi, atque, debitis impedit autem voluptas ex provident voluptatum, voluptate at porro."
                        />
                    </div>
                    {/* Thumbnail */}
                    <div className="thumbnail-hs">
                        <div className="item-hs">
                            <img src={PrincipalPage2}/>
                            <div className="content-hs">
                                <div className="title-hs">
                                     Ruta 1
                                </div>
                                <div className="des-hs">
                                    Una ruta preciosa
                                </div>
                            </div>
                        </div>
                        <div className="item-hs">
                            <img src="/assets/PrincipalPage3.jpg"/>
                            <div className="content-hs">
                                <div className="title-hs">
                                    Ruta 2
                                </div>
                                <div className="des-hs">
                                    La belleza del paisaje
                                </div>
                            </div>
                        </div>
                        <div className="item-hs">
                            <img src="/assets/PrincipalPage4.jpg"/>
                            <div className="content-hs">
                                <div className="title-hs">
                                    Ruta 3
                                </div>
                                <div className="des-hs">
                                    Un paisaje hermoso
                                </div>
                            </div>
                        </div>
                        <div className="item-hs">
                            <img src="/assets/PrincipalPage1.jpg"/>
                            <div className="content-hs">
                                <div className="title-hs">
                                    Ruta 4
                                </div>
                                <div className="des-hs">
                                    del rio nace
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* arrows */}
                    <div className="arrows-hs">
                        <button id="prev-hs">←</button>
                        <button id="next-hs">→</button>                    
                    </div>
                    <div className="time-hs"></div>
                </div>
            </section>
        </div>
    )
}
export default HeroSection