import Meteora from '@assets/images/Meteora.jpg';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    height: 100%;
`;

export const AlbumDiv = styled.div`
    background-image: url(${Meteora});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    min-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AlbumsDiv = styled.div`
    background: #000000;
    height: 50vh;
    min-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
