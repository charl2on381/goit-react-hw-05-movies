import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movies';
import placeholderImage from './default-photo.png';
import styled from 'styled-components';
import { useHttp } from 'hooks/useHttp';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();
  const { data: cast, error } = useHttp(getMovieCredits, movieId);

  if (error) {
    toast.error(`Sorry, problem connection to server! ${error}`);
    return <ToastContainer />;
  }

  if (!cast) {
    return <Loader />;
  }

  return (
    <>
      {cast?.length !== 0 && (
        <CastList>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : placeholderImage
                }
                alt={actor.name}
                width={120}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </CastList>
      )}
      {cast?.length === 0 && (
        <NoInfo>We don't have any information about cast</NoInfo>
      )}
    </>
  );
};

export default Cast;

const CastList = styled.ul`
  color: white;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  li {
    text-align: center;
  }
  img {
    /* width: 120px; */
    border-radius: 10px;
  }
  p {
    margin-top: 0.5rem;
  }
`;

export const NoInfo = styled.p`
  color: white;
  padding-left: 1rem;
`;
