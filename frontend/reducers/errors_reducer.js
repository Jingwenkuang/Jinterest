import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import boardsErrorsReducer from './boards_errors_reducer';
import boardsPinsErrorsReducer from './boards_pins_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  pins: pinErrorsReducer,
  users: userErrorsReducer, 
  boards: boardsErrorsReducer,
  boardsPins: boardsPinsErrorsReducer
})

export default errorsReducer;