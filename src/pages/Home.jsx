import styled from '@emotion/styled';
import React from 'react';
import PageTitle from '../components/PageTitle';

function Home() {
  return (
    <div>
      <PageTitle title="Home" />
      <Text>Home</Text>
    </div>
  );
}

export default Home;

const Text = styled.p`
  color: ${({ theme }) => theme.color.black};
  @media (min-width: ${({ theme }) => theme.mediaQuery.laptop}) {
    color: ${({ theme }) => theme.color.primary};
  }
`;
