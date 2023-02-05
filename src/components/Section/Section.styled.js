import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 20px 0 60px;
  background-color: #e0e0e0;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  color: rgb(0, 124, 97);
`;
