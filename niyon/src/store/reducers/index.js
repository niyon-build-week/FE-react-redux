import { LOGIN_START, LOGIN_WIN, LOGIN_FAIL, FETCH_START, FETCH_WIN, FETCH_FAIL } from '../actions';

const initialState = {
      qFeed: [],
      isLoggedIn: false,
      isFetching: false,

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
            case FETCH_START:
                  return {
                        ...state,
                        isFetching: true,
                        error: ''
                  }
            case FETCH_WIN:
                  return {
                        ...state,
                        qFeed: action.payload,
                        isFetching:false,
                        error: ''
                  }
            case FETCH_FAIL:
                  return {
                        ...state,
                        isFetching: false,
                        error: action.payload
                  }
            default:
                  return state
      }
}

export default loginReducer;