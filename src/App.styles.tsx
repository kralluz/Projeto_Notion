import { styled, CSSObject } from "styled-components";

// Defina uma interface para as propriedades personalizadas do componente MainContainer
interface MainProps {
    isopensidebarvalue: boolean;
}

// Crie um componente Styled `AppStyled`
export const AppStyled = styled.div`
    display: flex;
`;

// Crie um componente Styled `MainContainer` e passe a interface como tipo genérico
export const MainContainer = styled.div<MainProps>`
    // Utilize as propriedades personalizadas no estilo condicional
    position: absolute;
    right: 0;
    width: ${(props) =>
        props.isopensidebarvalue ? "calc(100% - 220px)" : "100%"};
    z-index: -1;
    transition: 0.5s;
`;

// Você também pode definir um estilo CSS como um objeto para reutilização
const commonStyles: CSSObject = {
    border: "1px solid #ccc",
    padding: "10px",
};

// Crie um componente Styled com estilos condicionais e estilos reutilizáveis
export const StyledComponentWithCommonStyles = styled.div<MainProps>`
    // Use as propriedades personalizadas em estilos condicionais
    ${(props) => (props.isopensidebarvalue ? "color: blue;" : "color: red;")}

    // Inclua estilos reutilizáveis
    ${commonStyles}
`;

/* 
    Importe styled e CSSObject de styled-components.

    Defina uma interface chamada MainProps que representa as propriedades personalizadas que seu componente MainContainer usará.

    Crie o componente Styled AppStyled usando styled.div. Este componente não requer propriedades personalizadas, então não é necessário adicionar a interface MainProps.

    Crie o componente Styled MainContainer usando styled.div e passe a interface MainProps como um tipo genérico. Isso permite que o TypeScript saiba que este componente aceita uma propriedade isopensidebarvalue de tipo boolean.

    Dentro de MainContainer, você pode usar a propriedade isopensidebarvalue no estilo condicional para definir a largura com base em sua condição.

    Crie um objeto commonStyles do tipo CSSObject que contém estilos CSS reutilizáveis.

    Crie um componente Styled StyledComponentWithCommonStyles com estilos condicionais baseados na propriedade isopensidebarvalue e inclua estilos reutilizáveis do objeto commonStyles.
*/
