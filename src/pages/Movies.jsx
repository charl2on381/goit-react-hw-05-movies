import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/movies';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useHttp } from 'hooks/useHttp';
import Loader from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { data: movies, error, loading } = useHttp(getMoviesByName, query);

  const handleSetQuery = query => {
    setSearchParams(query ? { query } : {});
  };

  if (error) {
    toast.error(`Sorry, problem connection to server! ${error}`);
    return <ToastContainer />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchForm handleSetQuery={handleSetQuery} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
