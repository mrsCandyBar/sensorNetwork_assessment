import React, { useState } from 'react';

const Search = (props) => {
  const [username, setUsername] = useState('');
  const submitAction = (event) => {
    props.action(username);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <h1>Search GitHub for a user</h1>
      <p>Note: this search checks the GitHub user's actual name and their usernames.</p>

      <form onSubmit={submitAction}>
        <div>
          <div md={6}>
            <input 
              id='username'
              name='username'
              class="input" 
              type="text" 
              placeholder="Username / Github User's Name"
              onChange={(input) => setUsername(input.target.value)} />
          </div>
          <div>
            <input class="button" type="submit" value="Search" onClick={submitAction} />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Search;