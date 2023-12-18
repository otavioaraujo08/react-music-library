import { AlbumDetails } from '@utils/albunsObject';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    max-heigth: 90%;
`;

const AlbumCover = styled.img`
    height: 100%;
    width: fit-content;
`;

interface CarouselProps {
    slides: AlbumDetails[];
}

const Carousel = ({ slides }: CarouselProps) => {
    return (
        <CarouselContainer>
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={50}
                totalSlides={3}
                currentSlide={0}
                isPlaying={true}
                interval={4000}
                infinite={true}
            >
                <Slider>
                    {slides.map((album) => {
                        return (
                            <Slide index={album.id} key={album.id}>
                                <AlbumCover
                                    src={album.cover}
                                    alt={album.title}
                                />
                            </Slide>
                        );
                    })}
                </Slider>
            </CarouselProvider>
        </CarouselContainer>
    );
};

export default Carousel;
