import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from "react-redux";

// const mapStateToProps = 
const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});



class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.openModal('login')
  }

  render() {
             return (
               <div className="homepage">
                 <img src={window.homepagePhoto} className="homepage-photo" />
               </div>
             );
           }
}
 


export default connect(null, mapDispatchToProps)(Home);
