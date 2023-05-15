import React, { useState } from 'react';
import Pagination from '../../../components/pagination';

const Results = (props) => {
  const windowWidth = window.innerWidth;
  const [count, setRepoPage] = useState(0);

  return (
    props.results && props.results.users && props.results.users.length > 0 ? (
      <React.Fragment>
        <div className='columns p-5 is-multiline cap-height'>
          {props.results.users && (
            <Pagination
              paginationCount={props.results.total_count}
              count={count}
              maxResults={15}
              updateCountProp={(count) => setRepoPage(count)}
              updateResultsAction={(count) => props.actions.updateUserResults(count)}
            />
          )}

          {props.results.users.map((user, index) => {
            const {
              avatar_url,
              login
            } = user;

            return (
              <div key={index} className={"column mb-3 " + (windowWidth > 1300 ? "is-one-quarter" : "is-one-third")}>
                <div
                  className='user-result p-3'
                  onClick={() => props.actions.selectUser(login)}
                >
                  <img className='mb-0' src={avatar_url} alt={login} />
                  <p className='title is-4 button is-black is-large'>{login}</p>
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