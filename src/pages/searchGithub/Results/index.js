import React from 'react';

const Results = (props) => {
  return (
    props.results.length > 0 ? (
      <React.Fragment>
        <h1>User Results</h1>
        <p>All user results :)</p>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>User Results</h1>
        <p>No user results :(</p>
      </React.Fragment>
    )
  );
}

export default Results;