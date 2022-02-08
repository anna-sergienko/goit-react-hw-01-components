import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeading,
  TableBody,
  TableData,
  TableRowHead,
  TableRowBody,
} from './Transactions.styled';

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRowBody>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRowBody>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableRowHead key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRowHead>
        ))}
      </TableBody>
    </Table>
  );
}
