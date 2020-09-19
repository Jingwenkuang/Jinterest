import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dropDownHidden: true 
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this)
  }

  // componentDidMount(){
  //   this.props.fetchUser(this.props.currentUserId)
  // }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropDownHidden: !this.state.dropDownHidden })
  }


  hideDropDown(e) {
    this.setState({ boardList: !this.state.dropDownHidden });
  }

  componentDidUpdate(prevProps) {
 
    if (prevProps.currentUserId !== this.props.currentUserId) {
      this.props.fetchUser(this.props.match.params.currentUserId)
    }
  }

  render() {
    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "";

    const { user } = this.props;    
    const profilePhoto = user.profileUrl ? (
      <img src={user.profileUrl} className="cat-photo" />
    ) : (
      <i className="fa fa-user-circle" id="profile-demo-icon"></i>
    );
 
    if (!user) return <div></div>;
    return(
      
      <div className='profile-container' onClick={this.hideDropDown}>
        <div className='profile-box'>

          <div className="profile-icon">
            <div className="create-icon" id="options" onClick={this.handleDropDown}>
              <i className="fa fa-plus"></i>
              <div className={`drop-down ${dropDownHidden}`}>
                <div><Link to="/pin-builder" className="create-pin-tab">Create Pin</Link></div>
                <div onClick={() => this.props.openModal('new-board')}>
                  <div className='create-board-tab'>Create Board</div>
                </div>
              </div>
            </div>
              
            <div className='edit-icon' onClick={() => this.props.openModal('edit-profile')}>
              <i className="fa fa-pencil"></i>
             </div>
          </div>

          <div className='profile-info-box'>
            <div className='profile-info'>
              <div className='profile-name'>{user.email.slice(0, user.email.indexOf('@'))}</div>
              <div className='profile-description'>{user.description}</div>
            </div>
              <div className='profile-cat-photo'>
                {profilePhoto}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;

