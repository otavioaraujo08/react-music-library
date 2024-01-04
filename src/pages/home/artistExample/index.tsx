import { spotifyArtistService } from '@services/spotifyArtistService';
import {
    AlbumDiv,
    AlbumImage,
    AlbumTitle,
    AlbumsDiv,
    BlankDiv,
    ButtonWithStyle,
    Container,
    CoverDiv,
    NotFoundTitle,
} from './styles';
import { useEffect, useState } from 'react';
import { ArtistAlbumResponse } from 'types/spotifyArtist';
import ButtonStyled from '@components/buttonStyled';
import { getToken } from '@utils/getToken';
import { refreshToken } from '@utils/refreshToken';

export const ArtistExample = () => {
    const [albumsList, setAlbumsList] = useState<ArtistAlbumResponse[]>();

    const getArtistAlbums = async () => {
        try {
            if (albumsList) {
                return;
            } else {
                const response = await spotifyArtistService.GetArtistAlbums(
                    '6XyY86QOPPrYVGvF9ch6wz',
                    {
                        limit: 12,
                    }
                );

                setAlbumsList(response.items);
            }
        } catch (err: any) {
            console.log(err);
            if (err?.error.message === 'The access token expired') {
                refreshToken();
                return getToken();
            }
        }
    };

    useEffect(() => {
        getArtistAlbums();
    }, []);

    return albumsList?.length ? (
        <Container>
            <CoverDiv>
                <ButtonWithStyle onClick={getArtistAlbums}>
                    Acessar o Album
                </ButtonWithStyle>
            </CoverDiv>

            <AlbumsDiv>
                {albumsList.map((album) => {
                    const { id, name, images, external_urls } = album;

                    const handleRedirectUser = (url: string) => {
                        return window.open(url, '_blank');
                    };

                    return (
                        <AlbumDiv key={id}>
                            <AlbumImage
                                src={images[0].url}
                                alt={name}
                                onClick={() =>
                                    handleRedirectUser(external_urls.spotify)
                                }
                            />

                            <AlbumTitle
                                onClick={() =>
                                    handleRedirectUser(external_urls.spotify)
                                }
                            >
                                {name}
                            </AlbumTitle>
                        </AlbumDiv>
                    );
                })}
            </AlbumsDiv>
        </Container>
    ) : (
        <BlankDiv>
            <NotFoundTitle>
                Sem informações no momento, clique no botão abaixo para
                recarregar os dados!
            </NotFoundTitle>

            <ButtonStyled onClick={getArtistAlbums} title="Recarregar" />
        </BlankDiv>
    );
};
