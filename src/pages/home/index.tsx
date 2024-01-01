import { useEffect } from 'react';
import { HomeHeader } from '@pages/home/header';
import { HomeBanner } from '@pages/home/banner';
import { spotifyService } from '@services/spotifyService';
import { HomeDiv } from './styles';
import { ArtistExample } from './artistExample';

export const Home = () => {
    const getToken = async () => {
        const savedToken = localStorage.getItem('BearerToken');

        if (savedToken) {
            return;
        } else {
            try {
                const response = await spotifyService.PostToken();

                localStorage.setItem('BearerToken', response.access_token);
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <HomeDiv>
            <HomeHeader />

            <HomeBanner />

            <ArtistExample />
        </HomeDiv>
    );
};
