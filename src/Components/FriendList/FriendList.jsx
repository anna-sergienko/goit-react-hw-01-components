import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </List>
  );
}
