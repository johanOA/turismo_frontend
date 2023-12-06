// import { Image } from "../atoms/Image"
// import bgImage from "../../assets/HeroVector.png"
// import heroImage from "../../assets/hero-img.png"
// import { Text } from "../atoms/Text"
// import { HeroTexts } from "../particles/DataLists"
// import { Button } from "../atoms/Button"
// import { Play } from "@phosphor-icons/react"
// import { Fade, Slide } from "react-awesome-reveal"
import "../Styles/PrincipalPage.css";

const HeroSection = () => {
<<<<<<< HEAD
    return (
        <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end bg-#02590F">
            <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" />
            <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
                <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
                    <Text as="p" className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
                        <Fade>{HeroTexts.firstText}</Fade>
                    </Text>
                    <Text as="h1" className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium">
                        <Fade>{HeroTexts.secondText}</Fade>
                    </Text>
                    <Text as="p" className="text-color3 md:text-base text-sm text-justify font-light">
                        <Fade>{HeroTexts.thirdText}</Fade>
                    </Text>
                    <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
                        <Button type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-extralight rounded-lg">
                            {HeroTexts.firstButton}
                        </Button>
                        <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
                            <Text as="span" className="relative flex h-14 w-14">
                                <Text as="span" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"></Text>
                                <Text as="span" className="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1">
                                    <Play size={20} color="currentColor" weight="fill" />
                                </Text>
                            </Text>
                            <Button type="button" className="outline-none border-none">
                                {HeroTexts.secondButton}
                            </Button>
                        </div>
=======
        
    const nextDom: HTMLElement | null = document.getElementById('next-hs');
    const prevDom: HTMLElement | null = document.getElementById('prev-hs');
    const carouselDom: HTMLElement | null = document.querySelector('.carousel-hs');
    const listItemDom: HTMLElement | null = document.querySelector('.carousel-hs .list-hs');
    const thumbnailDom: HTMLElement | null = document.querySelector('.carousel-hs .thumbnail-hs');
>>>>>>> a3a00c07dab9d1532881e6673bb35e79587a7c4c

    if (nextDom) {
        nextDom.onclick = function () {
            showSlider('next-hs');
        };
    }
    if(prevDom) {
        prevDom.onclick = function () {
            showSlider('prev-hs');
        };
    }

    const timeRunning = 3000;
    let runTimeOut: number;

    function showSlider(type: 'next-hs' | 'prev-hs'): void {
        const itemSlider = document.querySelector('.carousel-hs .list-hs');
        const itemThumbnail = document.querySelector('.carousel-hs .thumbnail-hs');

        if (type === 'next-hs') {
            const firstClone = itemSlider?.firstElementChild?.cloneNode(true);
            const firstThumbnailClone = itemThumbnail?.firstElementChild?.cloneNode(true);

            if (firstClone && firstThumbnailClone) {
                listItemDom?.appendChild(firstClone);
                thumbnailDom?.appendChild(firstThumbnailClone);

                const firstElementChildSlider = itemSlider?.firstElementChild;
            if (firstElementChildSlider) {
                listItemDom?.removeChild(firstElementChildSlider);
            }

            const firstElementChildThumbnail = itemThumbnail?.firstElementChild;
            if (firstElementChildThumbnail) {
                thumbnailDom?.removeChild(firstElementChildThumbnail);
            }

                carouselDom?.classList.add('next-hs');

                setTimeout(() => {
                    carouselDom?.classList.remove('next-hs');
                }, 500); // Ajusta el tiempo según la duración de la animación
            }
        } else {
            const lastClone = itemSlider?.lastElementChild?.cloneNode(true);
            const lastThumbnailClone = itemThumbnail?.lastElementChild?.cloneNode(true);

            if (lastClone && lastThumbnailClone) {
                listItemDom?.prepend(lastClone);
                thumbnailDom?.prepend(lastThumbnailClone);

                listItemDom?.removeChild(itemSlider?.lastElementChild as Node) ;
                thumbnailDom?.removeChild(itemThumbnail?.lastElementChild as Node);

                carouselDom?.classList.add('prev-hs');

                setTimeout(() => {
                    carouselDom?.classList.remove('prev-hs');
                }, 500); // Ajusta el tiempo según la duración de la animación
            }
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            // Se Puede ajustar otras cosas aquí si es necesario
        }, timeRunning);
    }
    
    return (     
        <section className="slide-arriba">
            {/* Header */}
            <header>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </header>

            {/* Carrousel */}
            <div className="carousel-hs">
                {/* list item */}
                <div className="list-hs">
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage1.jpg"/>
                        <div className="content-hs">
                            <div className="author-hs">AUTOR</div>
                            <div className="title-hs">TITULO</div>
                            <div className="topic-hs">GENOVA</div>
                            <div className="des-hs">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum quis dolorem autem necessitatibus doloremque, consequuntur eius illum harum ab doloribus. Ex perferendis nobis, repellat voluptatibus dicta officiis et eligendi.
                            </div>
                            <div className="buttons-hs">
                                <button>VER MAS</button>
                                <button>ACERCA DE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage2.jpg"/>
                        <div className="content-hs">
                            <div className="author-hs">AUTOR</div>
                            <div className="title-hs">TITULO</div>
                            <div className="topic-hs">GENOVA</div>
                            <div className="des-hs">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum quis dolorem autem necessitatibus doloremque, consequuntur eius illum harum ab doloribus. Ex perferendis nobis, repellat voluptatibus dicta officiis et eligendi.
                            </div>
                            <div className="buttons-hs">
                                <button>VER MAS</button>
                                <button>ACERCA DE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage3.jpg"/>
                        <div className="content-hs">
                            <div className="author-hs">AUTOR</div>
                            <div className="title-hs">TITULO</div>
                            <div className="topic-hs">GENOVA</div>
                            <div className="des-hs">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum quis dolorem autem necessitatibus doloremque, consequuntur eius illum harum ab doloribus. Ex perferendis nobis, repellat voluptatibus dicta officiis et eligendi.
                            </div>
                            <div className="buttons-hs">
                                <button>VER MAS</button>
                                <button>ACERCA DE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage4.jpg"/>
                        <div className="content-hs">
                            <div className="author-hs">AUTOR</div>
                            <div className="title-hs">TITULO</div>
                            <div className="topic-hs">GENOVA</div>
                            <div className="des-hs">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum quis dolorem autem necessitatibus doloremque, consequuntur eius illum harum ab doloribus. Ex perferendis nobis, repellat voluptatibus dicta officiis et eligendi.
                            </div>
                            <div className="buttons-hs">
                                <button>VER MAS</button>
                                <button>ACERCA DE</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Thumbnail */}
                <div className="thumbnail-hs">
                    
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage2.jpg"/>
                        <div className="content-hs">
                            <div className="title-hs">
                                Nombre Slider
                            </div>
                            <div className="des-hs">
                                Descripcion
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage3.jpg"/>
                        <div className="content-hs">
                            <div className="title-hs">
                                Nombre Slider
                            </div>
                            <div className="des-hs">
                                Descripcion
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage4.jpg"/>
                        <div className="content-hs">
                            <div className="title-hs">
                                Nombre Slider
                            </div>
                            <div className="des-hs">
                                Descripcion
                            </div>
                        </div>
                    </div>
                    <div className="item-hs">
                        <img src="/src/assets/PrincipalPage1.jpg"/>
                        <div className="content-hs">
                            <div className="title-hs">
                                Nombre Slider
                            </div>
                            <div className="des-hs">
                                Descripcion
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
    )
}

export default HeroSection