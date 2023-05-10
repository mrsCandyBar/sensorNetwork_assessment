import React, { useEffect } from 'react';
import '../../assets/css/app.css';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

function Dashboard() {
  const team = useSelector(state => state.teams.teamMembers);
  console.log("team", team);

  return (
    <Container>
      <h1>Team Table</h1>

      {team?.map((teamMember, index) => {
        return (
          <Row key={"user_" + index} className='form-row'>
            <Col md={6}>{teamMember.fullname}</Col>
            <Col md={6}>{teamMember.location}</Col>
          </Row>
        )
      })}
    </Container>
  );
}

export default Dashboard;
