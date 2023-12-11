import { useEffect } from 'react';
import { HomeHeader } from '@pages/home/header';
import { spotifyService } from '@services/spotifyService';

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

    useEffect(() => {
        getToken();
    }, []);

    return <HomeHeader />;
};
