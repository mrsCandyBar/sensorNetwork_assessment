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
        <input
          className="button close-flyout-menu"
          type="button"
          value="close"
          onClick={() => props.action()} />

        <div className='columns is-vcentered'>
          <div className='column '>
            <div className='user-result'>
              <img src={avatar_url} alt={login} />
              <p>
                <big>{login}</big><br />
                <a href={html_url}>{name}</a><br />
                {bio}<br /><br />

                {followers} followers and is following {following} users<br /><br />

                {location}
              </p>
            </div>
          </div>

          <div className='column pr-0'>
            <div className='cap-height'>
              {props.userRepos && props.userRepos.length > 0 ? (
                <HasUserRepos repos_url={repos_url} userRepos={props.userRepos} />
              ) : (
                <p>This user does not have any user repos... yet!</p>
              )}
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

  function HasUserRepos(props) {
    return (
      <div>
        <h2 className='mt-5'>Repositories</h2>
        <input
          className="button"
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
              <div key={index} className='repo-entry p-3 mr-5 mt-5'>
                <p>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {name}
                    <small> created : {created_at}</small>
                  </a><br />
                  {description}<br /><br />
                  <small>
                    {updated_at && (<>updated : {updated_at}<br /></>)}
                    {forks_count && (<>fork count : {forks_count}<br /></>)}
                    {open_issues_count && (<>open issues : {open_issues_count}<br /></>)}
                    {watchers && (<>watchers : {watchers}</>)}
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
    props.user ?
      <HasUser
        user={props.user}
        userRepos={props.userRepos}
        action={props.action}
      /> : (
        <React.Fragment>
          <p>No userdata here ....</p>
        </React.Fragment>
      )

  );
}

export default SelectedUser;