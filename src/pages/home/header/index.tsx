import Eagle from '@assets/images/Eagle.png';
import { Header, LogoImage, Title } from './styles';

export const HomeHeader = () => {
    return (
        <Header>
            <div>
                <LogoImage src={Eagle} alt="Eagle Music Logo" />
                <Title>Eagle Music</Title>
            </div>

            <div>
                <li>
                    <ul>Início</ul>
                    <ul>Recomendado</ul>
                    <ul>Categorias</ul>
                </li>
            </div>
        </Header>
    );
};
