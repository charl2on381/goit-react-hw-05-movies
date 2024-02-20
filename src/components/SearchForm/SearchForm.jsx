import React, { useState } from 'react';
import styled from 'styled-components';

export const SearchForm = ({ handleSetQuery }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(query);

    setQuery('');
  };
  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <MoviesForm onSubmit={handleSubmit}>
      <label>
        <MoviesInput
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
          required
        />
      </label>
      <SearchButton>Search</SearchButton>
    </MoviesForm>
  );
};

const MoviesForm = styled.form`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

const MoviesInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #06bcee; /* Highlight color for the button */
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #05a0cc;
  }
`;
