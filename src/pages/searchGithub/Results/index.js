import React, { useState } from 'react';
import Pagination from '../../../components/pagination';
import UserResult from '../../../components/userResult';

const Results = (props) => {
  const windowWidth = window.innerWidth;
  const [count, setRepoPage] = useState(1);

  return (
    props.results &&
      props.results.users &&
      props.results.users.length > 0 ? (
      <React.Fragment>
        <div className='columns p-5 is-multiline cap-height'>
          {props.results.users.map((user, index) => {
            const {
              avatar_url,
              login
            } = user;

            return (
              <div key={index} className={"column mb-3 " + (windowWidth > 1300 ? "is-one-quarter" : "is-one-third")}>
                <UserResult
                  selectUser={props.actions.selectUser}
                  avatar_url={avatar_url}
                  login={login}
                />
              </div>
            )
          })}

          <div className='column is-full'>
            {props.results.users && (
              <Pagination
                paginationCount={props.results.total_count}
                count={count}
                maxResults={props.resultsPerPull}
                paginationOptions={8}
                updateCountProp={(count) => setRepoPage(count)}
                updateResultsAction={(count) => props.actions.updateUserResults(count)}
              />
            )}
          </div>
        </div>

      </React.Fragment >
    ) : (
      <React.Fragment>
        <p className='title text-center'>
          {props.results ? (
            <small>
              No user results ;(<br />
              Try searching for a different user.
            </small>
          ) : (
            <small>
              Welcome, pop in a username to get started!
            </small>
          )}

        </p>
      </React.Fragment>
    )
  );
}

export default Results;