import React from 'react';

interface CarouselItemProps {
    imageSrc: string;
    author: string;
    title: string;
    topic: string;
    description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    imageSrc,
    author,
    title,
    topic,
    description,
}) => {
    return (
        <div className="item-hs">
                        <img src={imageSrc}/>
                        <div className="content-hs">
                            <div className="author-hs">{author}</div>
                            <div className="title-hs">{title}</div>
                            <div className="topic-hs">{topic}</div>
                            <div className="des-hs">{description}</div>
                            <div className="buttons-hs">
                                <button>VER MAS</button>
                                <button>ACERCA DE</button>
                            </div>
                        </div>
                    </div>
    );
};

export default CarouselItem;
