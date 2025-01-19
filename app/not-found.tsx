import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #2C3E50;
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #7F8C8D;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const BackButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: #8B7355;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: 500;

  &:hover {
    background-color: #6B5835;
    text-decoration: none;
    color: white;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Message>
        Aradığınız sayfa bulunamadı.
      </Message>
      <BackButton href="/">
        Ana Sayfaya Dön
      </BackButton>
    </Container>
  );
} 