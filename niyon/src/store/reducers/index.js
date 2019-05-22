// import { LOGIN_START, LOGIN_WIN, LOGIN_FAIL, REGISTER_START, REGISTER_WIN, REGISTER_FAIL } from '../actions';

const initialState = {
      isLoggedIn: false,
      isFetching: false,
      isRegistering: false,
      user: {},
      error: null,

};

function loginReducer(state = initialState, action) {
      switch (action.type) {
            case LOGIN_START:
                  return {
                        ...state,
                        isLoggedIn: true,
                        error: ''
                  }
            case LOGIN_WIN:
                  return {
                        ...state,
                        user: action.payload,
                        isLoggedIn: true,
                        error: ''
                  }
            case LOGIN_FAIL:
                  return {
                        ...state,
                        isLoggedIn: false,
                        error: action.payload
                  }
            case REGISTER_START:
                  return {
                        ...state,
                        isRegistering: true,
                        error: ''
                  }
            case REGISTER_WIN:
                  return {
                        ...state,
                        user: action.payload,
                        isRegistering: true,
                        error: ''
                  }
            case REGISTER_FAIL:
                  return {
                        ...state,
                        isRegistering: false,
                        error: action.payload
                  }
             
            // case FETCH_START:
            //       return {
            //             ...state,
            //             isFetching: true,
            //             error: ''
            //       }
            // case FETCH_WIN:
            //       return {
            //             ...state,
            //             isFetching:false,
            //             error: ''
            //       }
            // case FETCH_FAIL:
            //       return {
            //             ...state,
            //             isFetching: false,
            //             error: action.payload
            //       }
            default:
                  return state
      }
}

// export default loginReducer;