import React, { useState } from 'react';
import Pagination from '../../../components/pagination';
import UserRepo from '../../../components/userRepo';
import SelectedUserBio from '../../../components/userBio';

const SelectedUser = (props) => {
  const [count, setRepoPage] = useState(0);

  function HasUser(props) {
    const {
      repoResultsPerPull,
      user,
      actions
    } = props;
    
    const {
      repos_url,
      public_repos
    } = user;

    return (
      <React.Fragment>
        <a className="title button close-flyout-menu is-black mt-5"
          onClick={() => actions.selectUser()}>
          <i className="gg-close" />
        </a>

        <div className='columns is-vcentered'>
          <div className='column'>
            <SelectedUserBio
              user={props.user}
            />
          </div>

          <div className='column pr-0'>
            <div className='cap-height'>
              {(props.userRepos && props.userRepos.length > 0) ? (
                <HasUserRepos
                  repos_url={repos_url}
                  userRepos={props.userRepos} />
              ) : (
                <p>This user does not have any user repos... yet!</p>
              )}

              {public_repos && (
                <Pagination
                  paginationCount={public_repos}
                  count={count}
                  maxResults={repoResultsPerPull || 5}
                  updateCountProp={(count) => setRepoPage(count)}
                  updateResultsAction={(count) => actions.updateRepoResults(count)}
                />
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
            return (<UserRepo
              key={index}
              repo={{ ...repo }}
            />)
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
        actions={props.actions}
      /> : (
        <React.Fragment>
          <p>No userdata here ....</p>
        </React.Fragment>
      )

  );
}

export default SelectedUser;