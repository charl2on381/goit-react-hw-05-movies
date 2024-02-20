import Loader from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { getTrendingMoviesList } from 'services/movies';
import styled from 'styled-components';

const Home = () => {
  const { data: movies, error } = useHttp(getTrendingMoviesList);

  if (error) {
    toast.error(`Sorry, problem connection to server! ${error}`);
    return <ToastContainer />;
  }

  if (!movies) {
    return <Loader />;
  }
  return (
    <>
      <HomeH2>Trending Today</HomeH2>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;

const HomeH2 = styled.h2`
  color: white;
  padding-left: 0.5rem;
`;
