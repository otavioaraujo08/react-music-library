import Carousel from '@components/carousel';
import { AlbunsObject } from '@utils/albunsObject';
import { Banner, BannerGrid, CarouselBanner, SubTitle, Title } from './styles';
import ButtonStyled from '@components/buttonStyled';

export const HomeBanner = () => {
    return (
        <Banner>
            <BannerGrid>
                <Title>
                    <strong>Playlists</strong> que ajudam a conquistar seus{' '}
                    <strong>Objetivos!</strong>
                </Title>

                <SubTitle>
                    Precisando daquele gás para alcançar aquela meta ? Nós te
                    ajudamos, com as melhores playlists do Spotify para cada
                    situação!
                </SubTitle>

                <ButtonStyled title="Redirecionar !" />
            </BannerGrid>
            <CarouselBanner>
                <Carousel slides={AlbunsObject} />
            </CarouselBanner>
        </Banner>
    );
};
