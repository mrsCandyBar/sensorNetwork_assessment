import React, { useState } from 'react';

const Search = (props) => {
  const [username, setUsername] = useState('');
  const submitAction = (event) => {
    console.log("username >>>", username);

    props.action(username);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <h1 className="title">Search GitHub</h1>
      <p className="subtitle"><b>Note:</b> this search checks GitHub user actual names and their usernames.</p>

      <form className="columns is-gapless" onSubmit={submitAction}>
        <div className="column is-four-fifths">
          <input
            id='username'
            name='username'
            className="input"
            type="text"
            placeholder="Username / Github User's Name"
            onChange={(input) => setUsername(input.target.value)} />
        </div>

        <div className="column">
          <input
            className="button is-fullwidth"
            type="submit"
            value="Go!"
          />
        </div>
      </form>
    </React.Fragment>
  );
}

export default Search;