import React from 'react';

const Results = (props) => {
  const windowWidth = window.innerWidth;

  return (
    props.results && props.results.users && props.results.users.length > 0 ? (
      <React.Fragment>
        <div className='columns p-5 is-multiline cap-height'>
          {props.results.users.map((user, index) => {
            const {
              avatar_url,
              login
            } = user;

            return (
              <div key={index} className={"column mb-5 " + (windowWidth > 1300 ? "is-one-quarter" : "is-one-third")}>
                <div className='user-result p-3'>
                  <img className='mb-0' src={avatar_url} alt={login} />
                  <p>
                    <big>{login}</big><br />
                    <input
                      className="button"
                      type="button"
                      value="More Info"
                      onClick={() => props.action(login)}
                    />
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </React.Fragment >
    ) : (
      <React.Fragment>
        <p className='title'>
          <small>
            No user results ;(<br />
            Try searching for a different user.
          </small>
        </p>
      </React.Fragment>
    )
  );
}

export default Results;