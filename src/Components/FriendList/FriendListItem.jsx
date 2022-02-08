import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
