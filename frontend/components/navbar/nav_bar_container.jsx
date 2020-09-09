import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../../actions/session_actions';
import { fetchAllUsers } from "../../actions/user_actions";


const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  user: state.entities.users[state.session.currentUserId],
}) 

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);