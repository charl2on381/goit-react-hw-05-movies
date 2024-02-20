import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <div>
        <NavMenu>
          <NavUl>
            <NavLi>
              <StyledLink to="/">Home</StyledLink>
            </NavLi>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavUl>
        </NavMenu>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;

const NavMenu = styled.nav`
  background-color: #333; /* Background color for the navbar */
  padding: 1rem;
`;

const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start; /* Aligns the nav items to the left */
`;

const NavLi = styled.li`
  margin-right: 2rem;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover,
  &.active {
    color: #06bcee;
  }
`;
