import Eagle from '@assets/images/Eagle.png';
import { Header, HomeDiv, LogoImage, Title } from './styles';

export const HomeHeader = () => {
    return (
        <HomeDiv>
            <Header>
                <div>
                    <LogoImage src={Eagle} alt="Eagle Music Logo" />
                    <Title>Eagle Music</Title>
                </div>

                <div>
                    <li>
                        <ul>Início</ul>
                        <ul>É Sério ?</ul>
                        <ul>Como ?</ul>
                    </li>
                </div>
            </Header>
        </HomeDiv>
    );
};
