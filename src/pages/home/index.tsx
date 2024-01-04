import { useEffect } from 'react';
import { HomeHeader } from '@pages/home/header';
import { HomeBanner } from '@pages/home/banner';
import { HomeDiv } from './styles';
import { ArtistExample } from './artistExample';
import { getToken } from '@utils/getToken';
import { Categories } from './categories';

export const Home = () => {
    const token = localStorage.getItem('BearerToken');

    useEffect(() => {
        getToken();
    }, [token]);

    return (
        <HomeDiv>
            <HomeHeader />

            <HomeBanner />

            <ArtistExample />

            <Categories />
        </HomeDiv>
    );
};
