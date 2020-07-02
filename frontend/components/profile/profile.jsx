import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import PinIndexItem from '../pins/pin_index_item';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dropDownHidden: true 
    }
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropDownHidden: !this.state.dropDownHidden })
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUserId)
  }

  render() {
    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "";

    const { user } = this.props
 
    if (!user) return <div></div>

    // const userPinsIndex = user.pins.map((pin) => {
    //   return <PinIndexItem 
    //           key={pin.id}
    //           pin={Object.values(pin)[0]}
    //           />
    // })
  
    return(
      
      <div className='profile-container'>
        <div className='profile-box'>

          <div className="profile-icon">
            <div className="create-icon" id="options" onClick={this.handleDropDown}>
             <i className="fa fa-plus"></i>
              <div className={`drop-down ${dropDownHidden}`}>
               <Link to="/pin-builder" className="create-pin-tab">Create Pin</Link>
              </div>
             </div>
          </div>

          <div className='profile-info-box'>
            <div className='profile-info'>
              <div className='profile-name'>{user.email.slice(0, user.email.indexOf('@'))}</div>
              <div className='profile-description'>{user.description}</div>
            </div>
              <div className='profile-cat-photo'>
                <img src={window.catURL} className='cat-photo' />
              </div>
          </div>
       
          <div className='profile-nav-button'>
            <NavLink className="button" to={`/users/${this.props.currentUserId}/pins`}>Boards</NavLink>
            <NavLink className="button" to={`/users/${this.props.currentUserId}/pins`}>Pins</NavLink>
          </div>

          {/* <div className='profile-pin-index'>
            {userPinIndex}
          </div> */}
        </div>
      </div>
    )
  }
}

export default Profile;

