import React from 'react';
import { openModal, toggleSessionModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import PinIndexContainer from "../pins/pin_index_container";
import { fetchAllPins } from "../../actions/pin_actions";

const mapStateToProps = (state) => ({
  pins: Object.values(state.entities.pins),
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
});



class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.openModal('login');
    this.props.fetchAllPins();
  }

  render() {
    console.log('yea')
    console.log(this.props.pins)

    // const PinIndex = this.props.pins.map((pin) => {
    //   return (
    //     <PinIndexContainer key={pin.id} pin={pin}/>
    //   )
    // })
             return (
               <div className="homepage">
                 {/* {PinIndex} */}
                 <img src={window.homepagePhoto} className="homepage-photo" />
               </div>
             );
           }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(Home);
