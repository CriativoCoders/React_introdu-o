import estilos from './Cabecalho.module.css';

export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <h1>Filmes</h1>
        </header>
    )
}