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
    this.props.updateDetails(user);
  }

  render() {
    const { username, first_name, last_name, description } = this.state;
    return (
      <div className='form-edit'>
        <div className="form-edit-box">
          <div className="form-header-edit">
            <h1>Edit Profile</h1>
            <p>
              <h3>People on Jinterest will get to know you</h3>
              <h3>with the info below</h3>
            </p>
              <div className="bottom-options">
                <div className="save-or-cancel">
                  <button className="cancel-edit" onClick={this.props.closeModal}>Cancel</button>
                  <button className="save-edit" onClick={this.handleSubmit}>Save</button>
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
    )
  }
}

export default ProfileEditForm;