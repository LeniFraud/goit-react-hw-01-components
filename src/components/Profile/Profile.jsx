import PropTypes from 'prop-types';
import {
  Wrapper,
  ProfileInfo,
  Avatar,
  Name,
  Tag,
  Location,
  ProfileStats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatarUrl,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <ProfileInfo>
        <Avatar src={avatarUrl} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileInfo>

      <ProfileStats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </ProfileStats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
