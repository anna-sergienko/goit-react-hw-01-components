import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

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

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </Container>
  );
}
