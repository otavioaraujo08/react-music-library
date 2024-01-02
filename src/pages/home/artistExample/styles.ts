import Meteora from '@assets/images/Meteora.jpg';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    height: 100%;
`;

export const CoverDiv = styled.div`
    position: relative;
    flex: 1;
    background-image: url(${Meteora});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 50rem;
`;

export const ButtonWithStyle = styled.button`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
    margin: 0 auto;
    width: 15rem;
    height: 2.5rem;
    border: 3px solid #ffffff;
    border-radius: 3%;
    background: #00b6ff3b;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
    cursor: pointer;

    &:hover {
        color: #ffb300;
    }
`;

export const AlbumsDiv = styled.div`
    flex: 1;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    flex-wrap: wrap;
    overflow-y: auto;
    max-height: 50rem;
    overflow-x: hidden;
`;

export const AlbumDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    flex-grow: 1;
    gap: 0.5rem;
    text-align: center;
    max-width: 12rem;
`;

export const AlbumTitle = styled.h1`
    max-width: 12rem;
    font-size: 1rem;
    font-weight: 500;
    color: #8e887a;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
    cursor: pointer;

    &:hover {
        color: #ffb300;
    }

    @media (max-width: 1200px) {
        font-size: 0.9rem;
    }

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`;

export const AlbumImage = styled.img`
    width: 100%;
    height: 10rem;
    cursor: pointer;
`;

export const BlankDiv = styled.div`
    background: #000000;
    height: 20rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
`;

export const NotFoundTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: #ffcc55;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.1rem;
`;
