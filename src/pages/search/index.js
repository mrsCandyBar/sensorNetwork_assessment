import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/gitHubApi';
import { Col, Row, Form } from 'reactstrap';
import FormFooter from '../../components/form/footer';
import FormHeader from '../../components/form/header';
import FormInput from '../../components/form/input';


function Search() {

  const [email, setEmail] = useState('');

  const submitQuery = (event) => {
    console.log("submit >>>", email);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <FormHeader
        title='Please sign in to your account.'
      />

      <Form onSubmit={submitQuery}>
        <Row className='form-row'>
          <Col md={6}>
            <FormInput
              id='email'
              type='email'
              name='email'
              placeholder='Email here...'
              label="Username / Email Address"
              value={email}
              onChange={(input) => setEmail(input.target.value)}
              required
            />
          </Col>
        </Row>

        <FormFooter
          action={submitQuery}
          actionText='Search'
        />
      </Form>
    </React.Fragment>
  );
}

export default connect(
  (state) => ({ users: state.gitHub.users }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Search);