import { AlbumDetails } from '@utils/albunsObject';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`\
    width: 100%;
    margin: 0.5rem 2rem;

    @media (max-width: 1640px) {
        margin: 2rem 2rem;
    }

    @media (max-width: 1250px) {
        margin: 7rem 4rem;
    }
`;

const SliderStyled = styled(Slider)`
    width: 100%;
`;

const AlbumCover = styled.img`
    height: 30rem;
    width: fit-content;
    object-fit: cover;
    border-radius: 95%;

    @media (max-width: 1640px) {
        height: 27rem;
    }

    @media (max-width: 1250px) {
        height: 20rem;
    }

    @media (max-width: 1020px) {
        height: 15rem;
    }
`;

interface CarouselProps {
    slides: AlbumDetails[];
}

const Carousel = ({ slides }: CarouselProps) => {
    return (
        <CarouselContainer>
            <CarouselProvider
                naturalSlideHeight={10}
                naturalSlideWidth={10}
                totalSlides={slides.length}
                currentSlide={0}
                isPlaying={true}
                interval={4000}
                infinite={true}
            >
                <SliderStyled>
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
                </SliderStyled>
            </CarouselProvider>
        </CarouselContainer>
    );
};

export default Carousel;
