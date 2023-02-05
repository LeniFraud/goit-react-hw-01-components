import styled from 'styled-components';

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgb(236, 236, 236);
  }
`;

export const Stat = styled.td`
  height: 50px;
  width: calc(100% / 3);
  text-align: center;
  color: rgb(134, 134, 134);
  border-left: 1px solid rgb(226, 226, 226);
  border-right: 1px solid rgb(226, 226, 226);

  &::first-letter {
    text-transform: uppercase;
  }
`;
