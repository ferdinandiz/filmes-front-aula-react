import type { Movie } from '../types/Movie';

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => Promise<void>;
}

function MovieList({ movies, loading, onEdit, onDelete }: MovieListProps) {
  if (loading) {
    return (
      <section className="card">
        <h2>Filmes cadastrados</h2>
        <p>Carregando filmes...</p>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="section-title-row">
        <div>
          <span className="section-kicker">Listagem</span>
          <h2>Filmes cadastrados</h2>
        </div>
        <span className="counter-chip">{movies.length} registro(s)</span>
      </div>

      {movies.length === 0 ? (
        <p>Nenhum filme cadastrado ainda.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <article key={movie.id} className="movie-card">
              <div className="poster-wrapper">
                <img src={movie.posterPath} alt={movie.title} />
              </div>

              <div className="movie-content">
                <h3>{movie.title}</h3>
                <p className="meta-line">
                  Lançamento: <strong>{movie.releaseDate}</strong>
                </p>
                <p className="meta-line">
                  Nota: <strong>{movie.voteAverage.toFixed(1)}</strong>
                </p>
                <p className="overview-text">{movie.overview}</p>

                <div className="movie-actions">
                  <button type="button" className="btn secondary" onClick={() => onEdit(movie)}>
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn danger"
                    onClick={() => movie.id && onDelete(movie.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieList;
