import PropTypes from 'prop-types';
import { getRandomRgbColor } from 'utils/getRandomColor';
import {
  Wrapper,
  Title,
  StatList,
  Stat,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(el => (
          <Stat key={el.id} statColor={getRandomRgbColor()}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage} %</Percentage>
          </Stat>
        ))}
      </StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

Stat.propTypes = {
  statColor: PropTypes.string.isRequired,
};
