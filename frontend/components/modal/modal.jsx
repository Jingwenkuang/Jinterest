import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PinEditFormContainer from '../pins/pin_edit_form_container';
import ProfileEditFormContainer from '../profile/profile_edit_form_container';
import BoardCreateFormContainer from '../boards/board_create_form_container';
import BoardEditFormContainer from '../boards/board_edit_form_container';
import PinDeleteFormContainer from '../pins/pin_delete_form_container';
import BoardDeleteFormContainer from '../boards/board_delete_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component, clickBackground;
  switch (modal.type) {
    case "login":
      component = <LoginFormContainer closeModal={closeModal} />;
      break;
    case "signup":
      component = <SignupFormContainer closeModal={closeModal} />;
      break;
    case "edit-pin":
      component = <PinEditFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    case "edit-profile":
      component = <ProfileEditFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    case "delete-pin":
      component = <PinDeleteFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    case "new-board":
      component = <BoardCreateFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    case "edit-board":
      component = <BoardEditFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    case "delete-board":
      component = <BoardDeleteFormContainer closeModal={closeModal} />;
      clickBackground = closeModal;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={clickBackground}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);