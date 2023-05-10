import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/account';
import { Col, Row, Form } from 'reactstrap';
import FormFooter from '../../components/form/footer';
import FormHeader from '../../components/form/header';
import FormInput from '../../components/form/input';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (event) => {
    console.log("submit >>>", email, password);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <FormHeader
        title='Please sign in to your account.'
      />

      <Form onSubmit={submitForm}>
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
          <Col md={6}>
            <FormInput
              type='password'
              name='password'
              id='password'
              placeholder='Password here...'
              label="Password"
              value={password}
              onChange={(input) => setPassword(input.target.value)}
              required
            />
          </Col>
        </Row>

        <FormFooter
          action={submitForm}
          actionText='Sign in'
        />
      </Form>
    </React.Fragment>
  );
}

export default connect(
  (state) => ({ me: state.account.me }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);