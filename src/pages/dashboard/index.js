import React from 'react';
import '../../assets/css/app.css';

import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

function Dashboard() {
  const selectedMember = useSelector(state => state.gitHub.selectedUser);
  console.log("selectedMember >>>", selectedMember);

  return (
    <Container>
      <h1>Selected Member</h1>

      {selectedMember && (
        <Row className='form-row'>
            <Col md={6}>{selectedMember.fullname}</Col>
            <Col md={6}>{selectedMember.location}</Col>
          </Row>
      )}
    </Container>
  );
}

export default Dashboard;
