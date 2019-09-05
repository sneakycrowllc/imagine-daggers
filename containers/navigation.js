import React from 'react';
import styled from '@emotion/styled';

import Link from '../components/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/register">
            <StyledLink className="nav-link">Register</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/landing">
            <StyledLink>Landing</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const StyledLink = styled.a`
  ${props => props.active ? (
    `
      background-color: ${props.theme.colors.CARDINAL};
      color: ${props.theme.colors.SNOW};
    `
  ) : (
    `
      color: ${props.theme.colors.SILVERRUST};
      text-decoration: underline;
    `
  )};
  &:hover {
    cursor: pointer;
  }
`;

export default Navigation;
