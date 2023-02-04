import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.info}>
      <td className={css.stat}>{type}</td>
      <td className={css.stat}>{amount}</td>
      <td className={css.stat}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
