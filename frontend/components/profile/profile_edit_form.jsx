import React from 'react';

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      email: user.email,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      description: user.description
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, first_name, last_name, description } = this.state;
    let user = { username, first_name, last_name, description };
    this.props.updateUser(user).then(this.props.closeModal);
  }

  render() {
    const { username, first_name, last_name, description } = this.state;
    return (
      <div className='pin-show-outside-container' >
        <div className='profile-goback' onClick={this.props.closeModal}>
          <i id='show-profile-arrow' className="fa fa-arrow-left"></i>
        </div>
      <div className='form-edit'>
        <div className="form-edit-box">
          <div className="form-header-edit">
            <h1>Edit Profile</h1>
            <div className='profile-edit-header'>
            <div>
              <div className='profile-message'>People on Jinterest will get to know you with the info below</div>
            </div>
              <div className="bottom-options">
                <div className="save-or-cancel">
                  <div className='profile-cancle'><button className="cancel-edit" onClick={this.props.closeModal}>Cancel</button></div>
                  <div className='profile-save'><button className="save-edit" onClick={this.handleSubmit}>Save</button></div>
                </div>
              </div>
            </div>
            <div className="user-edit-form-box">
              <div className="user-edit-details">
                <div className="content">
                <div className="image">
                  <p className='profile-text'>Photo</p>
                  <img className="profile-pic" src="https://jinterest-seeds.s3-us-west-1.amazonaws.com/cat.jpg"></img>
                </div>
                <div className='profile-edit-name'>
                  <div className='profile-text-name'>
                    <p className='profile-text'>First name
                      <input className="profile-input profile-text-name" type="text" value={first_name || ""} onChange={this.update("first_name")} />
                    </p>
                  </div>
                  <div className='profile-text-name'>
                    <p className='profile-text'>Last name
                      <input className="profile-input profile-text-name" type="text" value={last_name || ""} onChange={this.update("last_name")} />
                    </p>
                  </div>
                </div>
                  <div>
                    <p className='profile-text'>Username</p>
                    <input className="profile-input" type="text" value={username || ""} onChange={this.update("username")} />
                  </div>
                  <div>
                    <p className='profile-text'>About your profile</p>
                    <textarea className='profile-textarea' rows="3" value={description || ""} onChange={this.update("description")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ProfileEditForm;