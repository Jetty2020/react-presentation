import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';

function Home() {
  const data = useSelector((state) => state.user);
  console.log('home', data);
  return (
    <div>
      <PageTitle title="Home" />
      <Link to="/login">로그인</Link>
      <Text>Home</Text>
    </div>
  );
}

export default Home;

const Text = styled.p`
  color: ${({ theme }) => theme.text.bodyText};
  @media (min-width: ${({ theme }) => theme.mediaQuery.laptop}) {
    color: ${({ theme }) => theme.text.primary};
  }
`;
