import React from 'react';

const UserResult = (props) => {
    const {selectUser, avatar_url, login } = props;

    return (
        <button
            className='theme_user-result p-3'
            onClick={() => selectUser(login)}
        >
            <img className='mb-0' src={avatar_url} alt={login} />
            <p className='title is-4 button is-black is-large'>{login}</p>
        </button>
    );
}

export default UserResult;