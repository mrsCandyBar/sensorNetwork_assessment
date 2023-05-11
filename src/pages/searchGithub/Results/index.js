import React from 'react';

const Results = (props) => {
  return (
    props.results && props.results.users && props.results.users.length > 0 ? (
      <React.Fragment>
        <h1>User Results</h1>

        <div>
          {props.results.users.map((user, index) => {
            const {
              avatar_url,
              login
            } = user;

            return (
              <div key={index}>
                <img src={avatar_url} alt={login} />
                <p>
                  <big>{login}</big><br />
                  <input class="button" type="submit" value="More Info" onClick={props.action(login)} />
                </p>
              </div>
            )
          })}
        </div>

      </React.Fragment >
    ) : (
      <React.Fragment>
        <h1>User Results</h1>
        <p>No user results :(</p>
      </React.Fragment>
    )
  );
}

export default Results;