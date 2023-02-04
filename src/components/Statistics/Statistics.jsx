import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h3 className={css.title}>{title}</h3>}
      <ul className={css.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
