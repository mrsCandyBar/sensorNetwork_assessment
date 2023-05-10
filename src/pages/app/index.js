import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '../search';
import Dashboard from '../dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as GitHubActions } from '../../stores/reducers/gitHubApi';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Search/>} />
        <Route exact path='/search' element={<Search/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProp = (state) => ({
  ...state.gitHub,
});

export default connect(
  mapStateToProp,
  dispatch => bindActionCreators({
    ...GitHubActions
  }, dispatch))(App);
