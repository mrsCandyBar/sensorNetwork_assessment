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

  const selectUser = async(username) => {
    await props.getUser(username);
    username && await props.getUserRepos(username);
  }

  return (
    <React.Fragment>
      <div className="columns is-fullheight is-vcentered p-6 m-0">
        <div className="column is-one-third is-maxheight border-right">
          <div className='columns p-5 is-vcentered is-maxheight m-0'>
            <div className='column'>
              <Search action={(username) => submitQuery(username)} />
            </div>
          </div>
        </div>

        <div className="column p-5 is-two-thirds">
          <Results
            action={(username) => selectUser(username)}
            results={props.users}
          />
        </div>

        {props.selectedUser && (
          <div className="column is-one-third is-maxheight border-left is-visible is-absolute ">
            <div className='columns p-5 is-vcentered is-maxheight m-0'>
              <div className='column'>
                <SelectedUser
                  action={() => selectUser()}
                  user={props.selectedUser}
                  userRepos={props.selectedUserRepos}
                />
              </div>
            </div>
          </div>
        )}
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