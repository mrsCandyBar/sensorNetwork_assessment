import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/gitHubApi';
import Search from './Search';
import Results from './Results';
import SelectedUser from './SelectedUser';

const SearchGitHub = (props) => {

  const submitQuery = (username) => {
    props.search(username);
  }

  const selectUser = (username) => {
    props.getUser(username);
  }

  const getUserRepositories = (username) => {
    props.getUserRepositories(username);
  }

  return (
    <React.Fragment>
      <Search action={(username) => submitQuery(username)} />

      {props.users && (<Results 
        action={(username) => selectUser(username)} 
        results={props.users} 
      />)}

      {props.selectedUser && (<SelectedUser 
        action={(username) => getUserRepositories(username)} 
        user={props.selectedUser} 
        userRepos={props.selectedUserRepos} 
      />)}

    </React.Fragment>
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