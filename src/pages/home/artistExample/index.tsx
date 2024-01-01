import { spotifyArtistService } from '@services/spotifyArtistService';
import { AlbumDiv, Container } from './styles';

export const ArtistExample = () => {
    const getArtistAlbums = async () => {
        try {
            const response = await spotifyArtistService.GetArtistAlbums(
                '6XyY86QOPPrYVGvF9ch6wz'
            );

            console.log(response);
        } catch (err: any) {
            console.log(err);
        }
    };

    return (
        <Container>
            <AlbumDiv>
                <button onClick={getArtistAlbums}>just a button men</button>
            </AlbumDiv>
        </Container>
    );
};
