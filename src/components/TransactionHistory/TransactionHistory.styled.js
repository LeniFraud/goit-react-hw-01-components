import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Header = styled.th`
  height: 50px;
  width: calc(100% / 3);
  background-color: rgb(72, 196, 212);
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-left: 1px solid rgb(226, 226, 226);
  border-right: 1px solid rgb(226, 226, 226);
`;
