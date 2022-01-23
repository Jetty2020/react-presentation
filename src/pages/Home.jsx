import styled from '@emotion/styled';
import React from 'react';

function Home() {
  return (
    <div>
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
