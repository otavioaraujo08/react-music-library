import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        justify-content: center;
    }

    & > div {
        display: flex;
        align-items: center;
        margin: 0 2%;

        & > li {
            display: flex;
            gap: 2rem;
            font-size: 1.1rem;
            font-weight: 500;
            font-family: 'IBM Plex Sans', sans-serif;
            letter-spacing: 0.1rem;

            @media (max-width: 1200px) {
                font-size: 1rem;
                gap: 1rem;
            }

            @media (max-width: 800px) {
                font-size: 0.9rem;
            }

            @media (max-width: 400px) {
                display: none;
            }

            & > ul {
                cursor: pointer;

                &:hover {
                    color: #c4c4c4;
                    transition: all 0.3s ease-out;
                }
            }
        }
    }
`;

export const LogoImage = styled.img`
    height: 5rem;
    width: fit-content;
    cursor: pointer;

    @media (max-width: 1200px) {
        height: 4rem;
    }

    @media (max-width: 800px) {
        height: 3rem;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 0.2rem;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;
