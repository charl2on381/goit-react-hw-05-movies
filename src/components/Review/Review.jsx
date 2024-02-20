import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies';
import styled from 'styled-components';
import { NoInfo } from 'components/Cast/Cast';
import { useHttp } from 'hooks/useHttp';
import Loader from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';

const Review = () => {
  const { movieId } = useParams();
  const { data: reviews, error } = useHttp(getMovieReviews, movieId);

  if (error) {
    toast.error(`Sorry, problem connection to server! ${error}`);
    return <ToastContainer />;
  }

  if (!reviews) {
    return <Loader />;
  }
  return (
    <>
      {reviews?.length !== 0 && (
        <ReviewsList>
          {reviews?.map(item => (
            <li key={item.id}>
              <ReviewAuthor>
                Author: {item.author_details.username}
              </ReviewAuthor>
              <p>{item.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      {reviews?.length === 0 && (
        <NoInfo>We don't have any reviews for this movie.</NoInfo>
      )}
    </>
  );
};

export default Review;

const ReviewsList = styled.ul`
  color: white;
  list-style-type: none;
  padding: 0 1rem;
  li {
    margin-bottom: 1rem;
    border-bottom: 1px solid #444;
    padding-bottom: 1rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;

const ReviewAuthor = styled.p`
  font-weight: bold;
`;
