import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ 
    friends,
}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, id, isOnline}) => 
                <li key={id} className={css.item}>
                    <span className={`${css.status} ${isOnline ? css.isOnline : null}`}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>;
                </li>
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({ avatar: PropTypes.string, name: PropTypes.string, isOnline: PropTypes.bool })),
}

export default FriendList;