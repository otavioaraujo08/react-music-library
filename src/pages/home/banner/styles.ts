import styled from 'styled-components';

export const Banner = styled.div`
    width: 95%;
    height: 55vh;
    background: #fef8e0;
    border-radius: 4px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const BannerGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    justify-content: center;
    align-items: center;
`;

export const CarouselBanner = styled.div`
    overflow: hidden;
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
`;

export const SubTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 500;
    color: #8e887a;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
    text-align: left;
`;
