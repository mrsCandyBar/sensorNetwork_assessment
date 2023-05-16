import React, { useState } from 'react';
import Pagination from '../../../components/pagination';
import UserRepo from '../../../components/userRepo';
import SelectedUserBio from '../../../components/userBio';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';


const SelectedUser = (props) => {
  const [count, setRepoPage] = useState(1);

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
        <button className="title close-flyout-menu"
          onClick={() => actions.selectUser()}>
            <span><ArrowLeftIcon style={{ width: "20px", height: "20px" }} /> Return to results</span>
        </button>

        <div className='columns is-vcentered'>
          <div className='column'>
            <SelectedUserBio
              user={props.user}
            />
          </div>

          <div className='column pr-0'>
            <div className='cap-height'>
              <div className='m-5 '>
                {(props.userRepos && props.userRepos.length > 0) ? (
                  <HasUserRepos
                    login={user.login}
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
                    paginationOptions={4}
                    updateCountProp={(count) => setRepoPage(count)}
                    updateResultsAction={(count) => actions.updateRepoResults(count)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

  function HasUserRepos(props) {
    return (
      <div>
        <a
          className="button is-black mt-5 mb-5"
          href={"https://github.com/" + props.login + "?tab=repositories"}
          target="_blank"
          rel="noopener noreferrer">
          See all repo's in GitHub
        </a>

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
        <></>
      )

  );
}

export default SelectedUser;