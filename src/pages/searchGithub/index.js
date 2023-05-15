import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/gitHubApi';
import Search from './Search';
import Results from './Results';
import SelectedUser from './SelectedUser';

const SearchGitHub = (props) => {

  const [searchname, setSearchname] = useState("");
  const submitQuery = (username, count) => {
    props.search(username ? username : searchname, count ? count : 0);
    if (username) {
      setSearchname(username);
    }
  }

  const selectUser = async (username, count) => {
    await props.getUser(username);
    username && await props.getUserRepos(username, count ? count : 0);
  }

  return (
    <React.Fragment>
      <div className="columns is-fullheight is-vcentered p-0 m-0">
        <div className="column is-one-third is-maxheight border-right">
          <div className='columns p-5 is-vcentered is-maxheight m-0'>
            <div className='column'>
              <Search
                action={(username) => submitQuery(username)}
                noMoreAttemptsLeft={props.noMoreAttemptsLeft}
              />
            </div>
          </div>
        </div>

        <div className="column pt-0 pb-0 pl-5 pr-0 is-two-thirds">
          <Results
            actions={{
              selectUser: (username) => selectUser(username),
              updateUserResults: (count) => submitQuery(null, count)
            }}
            results={props.users}
          />
        </div>
        <div className={"column is-two-thirds is-maxheight border-left is-absolute p-0 " + (props.selectedUser ? "is-visible" : "is-visually-hidden")} >
          <div className='columns p-0 is-vcentered is-maxheight m-0'>
            <div className='column'>
              {props.selectedUser && (
                <div
                  className='is-maxheight is-fullwidth background-grey'
                  style={{ backgroundImage: "url(" + props.selectedUser.avatar_url + ")" }} />
              )}
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