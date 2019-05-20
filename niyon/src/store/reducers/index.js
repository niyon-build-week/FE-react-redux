import { LOGIN_START, LOGIN_WIN, LOGIN_FAIL  } from '../actions';

const initialState = {
      isLoggedIn: false
};

function loginReducer(state = initialState, action) {
      switch (action.type) {
            case LOGIN_START:
                  return {
                        ...state,
                        isLoggedIn: false,
                        error: ''
                  }
            case LOGIN_WIN:
                  return {
                        ...state,
                        isLoggedIn: true,
                        error: ''
                  }
            case LOGIN_FAIL:
                  return {
                        ...state,
                        isLoggedIn: false,
                        error: action.payload
                  }
            default:
                  return state
      }
}

export default loginReducer;