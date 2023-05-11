import React from 'react';

const SelectedUser = (props) => {

  function HasUser(props) {
    const {
      avatar_url,
      login,
      html_url,
      name,
      bio,
      followers,
      following,
      location,
      email,
      repos_url
    } = props.user;

    return (
      <React.Fragment>
        <div>
          <img src={avatar_url} alt={login} />
          <p>
            <big>{login}</big><br />
            <a href={html_url}>{name}</a><br />
            {bio}<br /><br />

            {followers} followers<br />
            and is following {following} users<br /><br />

            {location}<br />
            {email}<br />
          </p>
        </div>

        {props.userRepos.length > 0 ? (
          <HasUserRepos repos_url={repos_url} userRepos={props.userRepos} />
        ) : (
          <p>This user does not have any user repos... yet!</p>
        )}

      </React.Fragment>
    )
  }

  function HasUserRepos(props) {
    return (
      <div>
        <h2>Repositories</h2>
        <input
          class="button"
          type="submit"
          value="See all repo's in GitHub"
          onClick={() => window.location(props.repos_url)} />
        <div>
          {props.userRepos.map((repo, index) => {
            const {
              html_url,
              name,
              description,
              created_at,
              updated_at,
              forks_count,
              open_issues_count,
              watchers
            } = repo;

            return (
              <div key={index}>
                <p>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">{name}</a><br />
                  {description}<br /><br />
                  <small>
                    created : {created_at}<br />
                    updated : {updated_at}<br />
                    fork count : {forks_count}<br />
                    open issues : {open_issues_count}<br />
                    watchers : {watchers}
                  </small>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    props.user ? <HasUser user /> : <React.Fragment />
  );
}

export default SelectedUser;