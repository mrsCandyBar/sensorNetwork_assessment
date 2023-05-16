import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/gitHubApi';
import Search from './Search';
import Results from './Results';
import SelectedUser from './SelectedUser';
import Layout from '../../components/layout';

const SearchGitHub = (props) => {

  const resultsPerPull = 15;
  const repoResultsPerPull = 5
  const [searchname, setSearchname] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const submitQuery = (username, count) => {
    props.search(
      username ? username : searchname,
      resultsPerPull,
      count ? count : 1
    );

    if (username) {
      setSearchname(username);
    }
  }

  const selectUser = async (username, count) => {
    await props.getUser(username);
    username && await props.getUserRepos(
      username,
      repoResultsPerPull,
      count ? count : 1
    );
    setSelectedUser(username);
  }

  const selectUserRepos = async (count) => {
    await props.getUserRepos(
      selectedUser,
      repoResultsPerPull,
      count ? count : 1
    );
  }

  return (
    <div>
      {props.error && (
        <div className={"modal " + (props.error ? "is-active" : "")}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box text-center pt-5 pb-5">
              <p className='block'><b>{props.error.message}</b></p>
              <p className='block'>
                {props.error.response.data.message}<br />
                <small>Go to <a href={props.error.response.data.documentation_url} target="_blank" rel="noreferrer">GitHub Api docs</a></small>
              </p>
              <button className='button is-black block text-right' onClick={() => props.clearError()}>go back to results</button>
            </div>
          </div>
        </div>
      )}

      <Layout
        mainSidebar={(
          <Search
            action={(username) => submitQuery(username)}
            noMoreAttemptsLeft={props.noMoreAttemptsLeft}
          />
        )}

        mainContainer={(
          <Results
            actions={{
              selectUser: (username) => selectUser(username),
              updateUserResults: (count) => submitQuery(null, count)
            }}
            resultsPerPull={resultsPerPull}
            results={props.users}
          />
        )}

        selectedContentToggle={props.selectedUser}
        selectedContent={(
          <>
            {props.selectedUser && (
              <div
                className='is-maxheight is-fullwidth theme_background'
                style={{ backgroundImage: "url(" + props.selectedUser.avatar_url + ")" }} />
            )}
            <SelectedUser
              actions={{
                selectUser: (username) => selectUser(username),
                updateRepoResults: (count) => selectUserRepos(count)
              }}
              repoResultsPerPull={repoResultsPerPull}
              user={props.selectedUser}
              userRepos={props.selectedUserRepos}
            />
          </>
        )}
      />
    </div>
  );
}

export default connect(
  (state) => ({
    users: state.gitHub.users,
    selectedUser: state.gitHub.selectedUser,
    selectedUserRepos: state.gitHub.selectedUserRepos,
    error: state.gitHub.error
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SearchGitHub);