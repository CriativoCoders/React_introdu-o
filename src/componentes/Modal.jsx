import estilos from './Modal.module.css';

export function Modal({ movie, onClose }) {
    // If no movie is provided, return null
    if (!movie) {
        return null;
    }

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img 
                        className={estilos.imgModal} 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} // Changed to movie.title for better accessibility
                    />
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity}`}</li>
                        <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}