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
      count ? count : 0
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
      count ? count : 0
    );
    setSelectedUser(username);
  }

  const selectUserRepos = async (count) => {
    await props.getUserRepos(
      selectedUser,
      repoResultsPerPull,
      count ? count : 0
    );
  }

  return (
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
              className='is-maxheight is-fullwidth background-grey'
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
  );
}

export default connect(
  (state) => ({
    users: state.gitHub.users,
    selectedUser: state.gitHub.selectedUser,
    selectedUserRepos: state.gitHub.selectedUserRepos
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SearchGitHub);