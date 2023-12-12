import { useEffect } from 'react';
import { HomeHeader } from '@pages/home/header';
import { HomeBanner } from '@pages/home/banner';
import { spotifyService } from '@services/spotifyService';
import { HomeDiv } from './styles';

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

    return (
        <HomeDiv>
            <HomeHeader />

            <HomeBanner />
        </HomeDiv>
    );
};
