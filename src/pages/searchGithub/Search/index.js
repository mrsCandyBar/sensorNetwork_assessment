import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'reactstrap';
import FormInput from '../../../components/form/input';


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

      <Form onSubmit={submitAction}>
        <Row className='form-row'>
          <Col md={6}>
            <FormInput
              id='username'
              type='text'
              name='username'
              placeholder='Search by name here...'
              label="Username / Github User's Name"
              value={username}
              onChange={(input) => setUsername(input.target.value)}
              required
            />
          </Col>
          <Col>
            <Button onClick={submitAction}>Search</Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export default Search;