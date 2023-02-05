import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ current }) => {
    return current ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 80px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 1px;
  color: #333333;
`;
