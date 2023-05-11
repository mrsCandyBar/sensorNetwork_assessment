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

  const selectUser = async (username) => {
    await props.getUser(username);
    username && await props.getUserRepos(username);
  }

  return (
    <React.Fragment>
      <div className="columns is-fullheight is-vcentered p-0 m-0">
        <div className="column is-one-third is-maxheight border-right">
          <div className='columns p-5 is-vcentered is-maxheight m-0'>
            <div className='column'>
              <Search action={(username) => submitQuery(username)} />
            </div>
          </div>
        </div>

        <div className="column pt-0 pb-0 pl-5 pr-0 is-two-thirds">
          <Results
            action={(username) => selectUser(username)}
            results={props.users}
          />
        </div>
        <div className={"column is-two-thirds is-maxheight border-left is-absolute p-0 " + (props.selectedUser ? "is-visible" : "is-visually-hidden")}>
          <div className='columns p-0 is-vcentered is-maxheight m-0'>
            <div className='column'>
              <SelectedUser
                action={() => selectUser()}
                user={props.selectedUser}
                userRepos={props.selectedUserRepos}
              />
            </div>
          </div>
        </div>
      </div>

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