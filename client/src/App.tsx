import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
  color: #0057b7;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Note = styled.div`
  background: #e0f0ff;
  color: #004d99;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.9rem;
`;

function App() {
  return (
    <Wrapper>
      <Title>Welcome to MadeForEasy</Title>
      <Subtitle>Inshallah We will be officially starting on <strong>July 7</strong>!</Subtitle>
      <Note>Stay tuned — simplicity in healthcare is on its way.</Note>
    </Wrapper>
  );
}

export default App;
