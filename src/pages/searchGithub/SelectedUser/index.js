import React, { useState } from 'react';
import Pagination from '../../../components/pagination';

const SelectedUser = (props) => {
  const [count, setRepoPage] = useState(0);

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
      repos_url, 
      public_repos
    } = props.user;

    return (
      <React.Fragment>
        <a className="title button close-flyout-menu is-black mt-5"
          onClick={() => props.actions.selectUser()}>
          <i className="gg-close" />
        </a>

        <div className='columns is-vcentered'>
          <div className='column'>
            <div className='user-result'>
              <img src={avatar_url} alt={login} />
              <p>
                {login && (
                  <a href={html_url}>
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
                    <big className='title'>{bio}</big><br /><br />
                  </>
                )}

                {followers} followers and is following {following} users<br />
                {location}
              </p>
            </div>
          </div>

          <div className='column pr-0'>
            <div className='cap-height'>
              {props.userRepos && props.userRepos.length > 0 ? (
                <HasUserRepos 
                  count={count}
                  repos_url={repos_url} 
                  userRepos={props.userRepos}  
                  public_repos={public_repos} 
                  updateRepoResults={props.actions.updateRepoResults}/>
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
        <input
          className="button is-black mt-5 mb-5"
          type="submit"
          value="See all repo's in GitHub"
          onClick={() => window.location(props.repos_url)} />

        <div className='mb-5'>
          {props.userRepos.map((repo, index) => {
            const {
              html_url,
              name,
              description,
              created_at,
              forks_count,
              open_issues_count,
              watchers
            } = repo;

            return (
              <div key={index} className='repo-entry p-5 mr-5'>
                {(forks_count || open_issues_count || watchers) && (
                  <div className='icon-holder'>
                    {forks_count && (<>fork count : {forks_count}<br /></>)}
                    {open_issues_count && (<>open issues : {open_issues_count}<br /></>)}
                    {watchers && (<>watchers : {watchers}</>)}
                  </div>
                )}

                <div className="columns mb-0">
                  <div className="column">
                    <p>
                      <a className='title is-5' href={html_url} target="_blank" rel="noopener noreferrer">{name}</a>
                    </p>
                  </div>
                  <div className="column">
                    <small>started: {created_at}</small>
                  </div>
                </div>
                <p>{description}</p>
              </div>
            )
          })}

          {props.public_repos && (
            <Pagination
              paginationCount={props.public_repos}
              count={props.count}
              maxResults={2}
              updateCountProp={(count) => setRepoPage(count)}
              updateResultsAction={(count) => props.updateRepoResults(count)}
            />
          )}

        </div>

      </div>
    )
  }

  return (
    props.user ?
      <HasUser
        user={props.user}
        userRepos={props.userRepos}
        actions={props.actions}
      /> : (
        <React.Fragment>
          <p>No userdata here ....</p>
        </React.Fragment>
      )

  );
}

export default SelectedUser;