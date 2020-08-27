export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_SESSION = 'TOGGLE_SESSION';

export const openModal = (type, modalId) => {

  return {
    type: OPEN_MODAL,
    modal: {type, modalId}
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const toggleSessionModal = () => {
  return {
    type: TOGGLE_SESSION
  };
};
