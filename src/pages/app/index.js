import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login';
import Dashboard from '../dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as AccountActions } from '../../stores/reducers/account';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProp = (state) => ({
  me: state.account.me,
  ...state.themeOptions,
});

export default connect(
  mapStateToProp,
  dispatch => bindActionCreators({
    ...AccountActions
  }, dispatch))(App);
