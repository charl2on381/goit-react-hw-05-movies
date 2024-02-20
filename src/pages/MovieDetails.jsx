import Loader from 'components/Loader/Loader';
import { useHttp } from 'hooks/useHttp';
import React, { useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMoviesById } from 'services/movies';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, error } = useHttp(getMoviesById, movieId);

  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/movies');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  if (error) {
    toast.error(`Sorry, problem connection to server! ${error}`);
    return <ToastContainer />;
  }
  if (!movie) {
    return <Loader />;
  }

  return (
    <>
      <GoBack to={goBackLink.current}> &larr; Go Back</GoBack>
      <MovieContainer>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={300}
          alt="poster"
        />
        <MovieInfo>
          <h1>
            {movie.title}{' '}
            {movie.release_date
              ? `(${movie.release_date.substring(0, 4)})`
              : ''}
          </h1>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <MovieGenres>
            {movie.genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </MovieGenres>
        </MovieInfo>
      </MovieContainer>
      <AdditionalInfo>
        <p>Additinal information</p>
        <ul>
          <li>
            <AddInfoLink to="cast">Cast</AddInfoLink>
          </li>
          <li>
            <AddInfoLink to="review">Review</AddInfoLink>
          </li>
        </ul>
      </AdditionalInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;

const MovieContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  gap: 20px;
`;

const MovieInfo = styled.div`
  max-width: calc(100% - 250px);
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2,
  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const MovieGenres = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 10px;
    background: #06bcee;
    color: #121212;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const AdditionalInfo = styled.div`
  padding-left: 1rem;
  color: white;
  margin-top: 1rem;
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 10px;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

const AddInfoLink = styled(NavLink)`
  color: #06bcee;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #06bcee;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover,
  &.active {
    background-color: #06bcee;
    color: white;
  }
`;

const GoBack = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: bold;
  color: white;
  &:hover {
    color: #06bcee;
  }
`;
