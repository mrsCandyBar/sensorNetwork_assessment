import React from 'react';

const SelectedUser = (props) => {
  return (
    props.user ? (
      <React.Fragment>
        <h1>Selected User</h1>
        <p>:)</p>
      </React.Fragment>
    ) : (
      <React.Fragment />
    )
  );
}

export default SelectedUser;