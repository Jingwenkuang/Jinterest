import * as UsersAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS, 
  users
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

//thunk 
export const fetchAllUsers = () => dispatch => (
  UsersAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)),
    error => dispatch(receiveUserErrors(error.responseJson)))
)

export const fetchUser = (userId) => (dispatch) =>
  UsersAPIUtil.fetchUser(userId)
    .then((user) =>
      dispatch(receiveUser(user)),
      error => dispatch(receiveUserErrors(error.responseJson)))
  );