import styled from 'styled-components';
import { getRandomRgbColor } from 'utils/getRandomColor';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 1px;
  color: #333333;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 5);
  padding: 30px 0;
  background-color: ${getRandomRgbColor};
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 25px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
`;
