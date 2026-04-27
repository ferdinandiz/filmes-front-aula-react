import type { Movie } from '../types/Movie';

const API_URL = 'http://localhost:8081/filmes';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Erro ao comunicar com a API.');
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(API_URL);
  return handleResponse<Movie[]>(response);
}

export async function createMovie(movie: Movie): Promise<Movie> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  return handleResponse<Movie>(response);
}

export async function updateMovie(movie: Movie): Promise<Movie> {
  if (!movie.id) {
    throw new Error('ID do filme é obrigatório para atualização.');
  }

  const response = await fetch(`${API_URL}/${movie.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  return handleResponse<Movie>(response);
}

export async function deleteMovie(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Não foi possível excluir o filme.');
  }
}
