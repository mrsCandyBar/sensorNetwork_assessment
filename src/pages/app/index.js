import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchGitHub from '../searchGithub';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as GitHubActions } from '../../stores/reducers/gitHubApi';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchGitHub/>} />
        <Route exact path='/search' element={<SearchGitHub/>} />
      </Routes>
      <ToastContainer />
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
