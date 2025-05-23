import styled from "styled-components";


export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
  
    ${'' /* Funciona como um callback caso a cor passada seja invalida */}
    color: ${props => props.cor || '#EB9B00'};
    font-size: 36px;
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`