import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  user: state.entities.users[state.session.currentUserId],
}) 

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);