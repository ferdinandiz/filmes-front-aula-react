import { useEffect, useState } from 'react';
import type { Movie } from '../types/Movie';
import { emptyMovie } from '../types/Movie';

interface MovieFormProps {
  selectedMovie: Movie | null;
  onSave: (movie: Movie) => Promise<void>;
  onCancelEdit: () => void;
}

function MovieForm({ selectedMovie, onSave, onCancelEdit }: MovieFormProps) {
  const [movie, setMovie] = useState<Movie>(emptyMovie);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (selectedMovie) {
      setMovie(selectedMovie);
      return;
    }

    setMovie(emptyMovie);
  }, [selectedMovie]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setMovie((previous) => ({
      ...previous,
      [name]: name === 'voteAverage' ? Number(value) : value
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    try {
      await onSave(movie);

      if (!selectedMovie) {
        setMovie(emptyMovie);
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="card form-card">
      <div className="section-title-row">
        <div>
          <span className="section-kicker">Formulário</span>
          <h2>{selectedMovie ? 'Editar filme' : 'Novo filme'}</h2>
        </div>

        {selectedMovie && (
          <button type="button" className="btn secondary" onClick={onCancelEdit}>
            Cancelar edição
          </button>
        )}
      </div>

      <form className="movie-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              name="title"
              value={movie.title}
              onChange={handleChange}
              placeholder="Ex: Interestelar"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="releaseDate">Data de lançamento</label>
            <input
              id="releaseDate"
              type="date"
              name="releaseDate"
              value={movie.releaseDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field full-width">
            <label htmlFor="posterPath">Link do pôster</label>
            <input
              id="posterPath"
              name="posterPath"
              value={movie.posterPath}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>

          <div className="field full-width">
            <label htmlFor="overview">Sinopse</label>
            <textarea
              id="overview"
              name="overview"
              value={movie.overview}
              onChange={handleChange}
              rows={4}
              placeholder="Resumo do filme"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="voteAverage">Nota média</label>
            <input
              id="voteAverage"
              type="number"
              name="voteAverage"
              value={movie.voteAverage}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>
        </div>

        <div className="actions-row">
          <button type="submit" className="btn primary" disabled={saving}>
            {saving ? 'Salvando...' : selectedMovie ? 'Atualizar filme' : 'Cadastrar filme'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default MovieForm;
