import React from 'react';

const SelectedUserBio = (props) => {
    const {
        avatar_url,
        login,
        name,
        bio,
        followers,
        following,
        location
    } = props.user;

    return (
        <div className='theme_user-result'>
            <img src={avatar_url} alt={login} />
            <p>
                {login && (
                    <a
                        href={"https://github.com/" + login}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <big className='title button is-black is-large'>
                            {login}
                            {name && (
                                <>
                                    <br />
                                    <small>{name}</small>
                                </>
                            )}
                        </big>
                    </a>
                )}


                {bio && (
                    <>
                        <big className='title'>{bio}</big>
                        <br /><br />
                    </>
                )}

                {followers} followers and is following {following} users<br />
                {location}
            </p>
        </div>
    )
}

export default SelectedUserBio;