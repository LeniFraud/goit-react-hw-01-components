import PropTypes from 'prop-types';
import { TableRow, Stat } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <Stat>{type}</Stat>
      <Stat>{amount}</Stat>
      <Stat>{currency}</Stat>
    </TableRow>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
