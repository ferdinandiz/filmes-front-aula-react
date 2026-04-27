export interface Movie {
  id?: number;
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
}

export const emptyMovie: Movie = {
  title: '',
  overview: '',
  releaseDate: '',
  posterPath: '',
  voteAverage: 0
};
