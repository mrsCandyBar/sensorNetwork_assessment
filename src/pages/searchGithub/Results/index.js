import React, { useState } from 'react';


const Pagination = (props) => {

  const { paginationCount, count, maxResults, updateCountProp, updateResultsAction } = props;

  function updateCount(increase, index) {
    let updateCount = count;
    if (increase) {
      updateCount = updateCount + 1;
    } else {
      if (index) {
        updateCount = index
      } else {
        updateCount = updateCount - 1;
      }
      updateCountProp(updateCount);
      updateResultsAction(updateCount)
    }
  }

  const maxResultCount = Math.floor(paginationCount / maxResults);
  const maxResultCountUnder10 = maxResultCount > 10 ? 10 : maxResultCount;
  const maxResultCountUnderOnward = count + 5 > maxResultCount ? maxResultCount : count + 5;
  return (
    <>
      {count > 0 && (
        <input
          className="button is-black mt-5 mb-5 mr-3"
          type="submit"
          value="<<< Prev"
          onClick={() => updateCount()}
        />
      )}

      {(count < 5) ? (
        [...Array(maxResultCountUnder10)].map((x, i) =>
        (<input
          className="button is-black mt-5 mb-5 ml-1 mr-1"
          type="submit"
          value={i}
          onClick={() => updateCount(undefined, i)}
        />)
        )
      ) : (
        <>
          {[...Array(maxResultCountUnderOnward)].map((x, i) =>
          (<input
            className="button is-black mt-5 mb-5 ml-1 mr-1"
            type="submit"
            value={i}
            onClick={() => updateCount(undefined, i)}
          />)
          )}
        </>
      )
      }

      {paginationCount && (count !== maxResultCount) && (
        <input
          className="button is-black mt-5 mb-5 ml-3"
          type="submit"
          value="Next >>>"
          onClick={() => updateCount(true)}
        />
      )}

    </>
  )
}

const Results = (props) => {
  const windowWidth = window.innerWidth;
  const [count, setRepoPage] = useState(0);
  console.log("props.results.users", props)

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