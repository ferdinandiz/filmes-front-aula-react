import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { themes } from './config/themes';
import { createMovie, deleteMovie, getMovies, updateMovie } from './services/movieService';
import type { Movie } from './types/Movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [themeId, setThemeId] = useState(themes[0].id);

  const currentTheme = useMemo(
    () => themes.find((theme) => theme.id === themeId) ?? themes[0],
    [themeId]
  );

  useEffect(() => {
    void loadMovies();
  }, []);

  async function loadMovies() {
    setLoading(true);

    try {
      const data = await getMovies();
      setMovies(data);
      setMessage('Filmes carregados com sucesso.');
    } catch (error) {
      setMessage(getErrorMessage(error, 'Não foi possível carregar os filmes.'));
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(movie: Movie) {
    try {
      if (movie.id) {
        await updateMovie(movie);
        setMessage('Filme atualizado com sucesso.');
      } else {
        await createMovie(movie);
        setMessage('Filme cadastrado com sucesso.');
      }

      setSelectedMovie(null);
      await loadMovies();
    } catch (error) {
      setMessage(getErrorMessage(error, 'Erro ao salvar o filme.'));
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm('Deseja realmente excluir este filme?');

    if (!confirmed) {
      return;
    }

    try {
      await deleteMovie(id);
      setMessage('Filme excluído com sucesso.');
      if (selectedMovie?.id === id) {
        setSelectedMovie(null);
      }
      await loadMovies();
    } catch (error) {
      setMessage(getErrorMessage(error, 'Erro ao excluir o filme.'));
    }
  }

  function handleEdit(movie: Movie) {
    setSelectedMovie(movie);
    setMessage(`Editando o filme: ${movie.title}`);
  }

  function handleCancelEdit() {
    setSelectedMovie(null);
    setMessage('Edição cancelada.');
  }

  return (
    <div
      className="app-shell"
      style={
        {
          '--bg': currentTheme.background,
          '--panel': currentTheme.panel,
          '--panel-soft': currentTheme.panelSoft,
          '--accent': currentTheme.accent,
          '--accent-strong': currentTheme.accentStrong,
          '--text': currentTheme.text,
          '--text-soft': currentTheme.textSoft,
          '--border': currentTheme.border
        } as React.CSSProperties
      }
    >
      <div className="container">
        <Navbar themes={themes} selectedThemeId={themeId} onThemeChange={setThemeId} />

        <div className="status-bar">
          <span>API esperada: http://localhost:8081/filmes</span>
          <span>{message}</span>
        </div>

        <main className="content-grid">
          <MovieForm
            selectedMovie={selectedMovie}
            onSave={handleSave}
            onCancelEdit={handleCancelEdit}
          />
          <MovieList movies={movies} loading={loading} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}

export default App;
