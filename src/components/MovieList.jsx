import MovieCard from './MovieCard'


const MovieList = ({movies,searchTitle, searchRate}) => {
  return (
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap", justifyContent:"center"}}>
      
      {movies
      .filter((movie)=> 
        // filter par rapport chaine de caractère dans l'input + les étoiles
      movie.title.toUpperCase().includes(searchTitle.toUpperCase()) && movie.rate >= searchRate
      )
      // l'affichage des films correspondants
      .map((movie)=>(
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList