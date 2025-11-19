import './MovieCard.css';
import { Rate } from 'antd';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Image de la carte */}
      <img src={movie.posterUrl} alt={movie.title} />
      
      {/* Contenu texte */}
      <div className="movie-card-body">
        {/* Titre du film */}
        <h2 className="movie-title">{movie.title}</h2>
        
        {/* Description du film */}
        <p className="movie-description">{movie.description}</p>
        
        {/* Rating du film */}
        <div className="movie-rating">
          <Rate value={movie.rate} disabled />
        </div>
      </div>
      
      {/* Bouton d'action */}
      <button className="movie-button">Voir plus</button>
    </div>
  );
};

export default MovieCard;