import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/account';
import { Col, Row, Form } from 'reactstrap';
import FormFooter from '../../components/form/footer';
import FormHeader from '../../components/form/header';
import FormInput from '../../components/form/input';


function UserForm() {

  const id = useState('');
  const [fullname, setFullname] = useState('');
  const [location, setLocation] = useState('');

  const submitForm = (event) => {
    console.log("submit >>>", fullname, location, id);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <FormHeader
        title={!id ? 'Create User' : 'Edit User'} 
      />

      <Form onSubmit={submitForm}>
        <Row className='form-row'>
          <Col md={6}>
            <FormInput
              id='fullname'
              type='text'
              name='fullname'
              placeholder='Fullname here...'
              label="fullname"
              value={fullname}
              onChange={(input) => setFullname(input.target.value)}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              id='location'
              type='text'
              name='location'
              placeholder='Location here...'
              label="Address"
              value={location}
              onChange={(input) => setLocation(input.target.value)}
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
)(UserForm);