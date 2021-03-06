import React from "react";
import ProfileSwitches from "./profile_switches";
import BoardIndexContainer from "../boards/board_index_container";
import PinIndexContainer from "../pins/pin_index_container";

class ProfileContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSwitch: (location.hash.endsWith('pins')) ? 1 : 0
    };

    this.selectSwitch = this.selectSwitch.bind(this);
  }

  selectSwitch(num) {
    this.setState({ selectedSwitch: num });
  }

  render() {
    const { currentUser, user, boards, pins, openModal, closeModal } = this.props;
    const userBoards = boards.filter(board => board.user_id === user.id);
    const userPins = pins.filter(pin => pin.user_id === user.id);
 
    const contentTabs = [
      <BoardIndexContainer user={user} boards={userBoards}/>,
      <PinIndexContainer selectedPins={userPins}/>
    ];
    const selectedTab = contentTabs[this.state.selectedSwitch];
   

    return (
      <div id="profile-content">
        <div id="profile-switches-wrapper">
          <ProfileSwitches
            user={user}
            selectedSwitch={this.state.selectedSwitch}
            onSwitchClick={this.selectSwitch}
            tabs={contentTabs}
          />
        </div>
        <div id="profile-tab-wrapper">
          {selectedTab}
        </div>
      </div>
    )
  }
}

export default ProfileContent;

