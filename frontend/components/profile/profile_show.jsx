import React from "react";
import ProfileContent from "./profile_content";
import Profile from "./profile";

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    const fetchUser = (userId) => this.props.fetchUser(userId);

    this.props.fetchAllUsers()
      .then(res => {
       
        const user = Object.values(res.users).find(user => user.id === this.props.currentUserId)
        return fetchUser(user.id);
      });
  }

  render() {
    const { currentUser, currentUserId, users, username, boards, pins, openModal, closeModal } = this.props;
    const user = users.find(user => user.id === currentUserId);

    return (
      <div id="profile-background">
        <div id="profile-container">
          <div id="profile">
            <div id="profile-header-container">
              <Profile
                currentUser={currentUser}
                user={user}
                openModal={openModal}
                closeModal={closeModal}
              />
            </div>
            <div id="profile-content-container">
              <ProfileContent
                currentUser={currentUser}
                user={user}
                boards={boards}
                pins={pins}
                openModal={openModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ProfileShow;