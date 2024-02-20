import React from 'react';
import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = ({ color = '#06bcee' }) => {
  return (
    <StyledLoader>
      <Bars
        height="80"
        width="80"
        color={color}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
