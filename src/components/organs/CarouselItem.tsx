interface CarouselItemProps {
    imageUrl: string;
    author: string;
    title: string;
    topic: string;
    description: string;
}
const CarouselItem = ({ imageUrl, author, title, topic, description }: CarouselItemProps) => {
    return (
        <div className="item-hs">
            <img src={imageUrl} alt={title} />
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