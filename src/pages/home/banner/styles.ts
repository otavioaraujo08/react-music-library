import styled from 'styled-components';

export const Banner = styled.div`
    width: 95%;
    height: 31rem;
    background: #fef8e0;
    border-radius: 4px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media (max-width: 820px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BannerGrid = styled.div`
    grid-area: 1 / 3 / 2 / 6;
    height: 100%;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 820px) {
        text-align: center;
        width: 90%;
    }
`;

export const CarouselBanner = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    overflow: hidden;

    @media (max-width: 820px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 2.6rem;
    font-weight: 500;
    color: #646150;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
    text-align: left;

    & > strong {
        font-weight: 600;
        color: #282b21;
    }

    @media (max-width: 1500px) {
        font-size: 2.4rem;
    }

    @media (max-width: 1200px) {
        font-size: 2rem;
    }

    @media (max-width: 800px) {
        font-size: 1.8rem;
    }
`;

export const SubTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 500;
    color: #8e887a;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
    text-align: left;

    @media (max-width: 1200px) {
        font-size: 1.4rem;
    }

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
