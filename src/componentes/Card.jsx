// Precisamos colocar a estrutura para fazer o componente
import estilos from './Card.module.css';
export function Card({ movie }){
    return(
        <div className={estilos.container}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            onClick={()=> onOpeModal(movie)}/>
            <p>{movie.overview}</p>
        </div>
    );
}