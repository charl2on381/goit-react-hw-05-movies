import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesUl>
      {movies.map(movie => (
        <MoviesLi key={movie.id}>
          <MovieLink state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </MovieLink>
        </MoviesLi>
      ))}
    </MoviesUl>
  );
};

export default MoviesList;

const MoviesUl = styled.ul`
  background-color: #2c2c2c;
  padding: 0;
  list-style-type: none;
`;

const MoviesLi = styled.li`
  padding: 0.5rem 0;
  padding-left: 1rem;
  border-bottom: 1px solid #444;
  color: white;
`;

const MovieLink = styled(NavLink)`
  color: white; /* White text color for movie titles */
  text-decoration: none;
  display: block;
  /* padding: 0.5rem; */
  transition: background-color 0.3s;
  &:hover {
    background-color: #3d3d3d; /* Slightly lighter for hover/focus */
    color: #06bcee;
  }
`;
