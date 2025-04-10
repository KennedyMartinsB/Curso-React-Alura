import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa(params) {

    const [livrosPesquisados, setlivrosPesquisados] = useState([])

    // console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input placeholder="Escreva sua proxima leitura"
                onBlur={event => {

                    // Pegando texto digitado pelo usuario
                    const textoDigitado = event.target.value
                    //  .includes verifica se um texto passado está incluido em certa propriedade do objeto
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setlivrosPesquisados(resultadoPesquisa)

                }}
            />
            {/* Este map serve como uma especie de ng-for ou v-for */}
            {/* Mapeia o array e lista os livros cujo o nome bate com a pesquisa */}
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <img src={livro.src} alt={livro.alt} />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
            {/* <Input placeholder="Escreva sua proxima leitura"
                onChange={event => setLivroDigitado(event.target.value)}
            /> */}
            {/* <p>{livroDigitado}</p> */}
        </PesquisaContainer>
    )
}

export default Pesquisa