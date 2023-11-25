import { spotifyService } from '../../services/spotifyService';
import { useEffect } from 'react';

export const Home = () => {
    const getToken = async () => {
        const savedToken = localStorage.getItem('BearerToken');

        if (savedToken) {
            return;
        } else {
            try {
                const response = await spotifyService.PostToken();

                localStorage.setItem('BearerToken', response.access_token);

                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const getArtistInfos = async () => {
        try {
            const response = await spotifyService.GetArtist();

            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            <h1>Minha Biblioteca Musical</h1>

            <button
                onClick={getArtistInfos}
                style={{
                    fontSize: '1.4rem',
                    width: '20rem',
                    height: '3rem',
                    background: '#e3cdcd',
                    color: '#000000',
                }}
            >
                Buscar informações do artista
            </button>
        </div>
    );
};
