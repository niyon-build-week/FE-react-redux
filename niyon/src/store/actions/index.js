import axios from 'axios';

//action types exported to reducer

export const REGISTER = 'REGISTER';
export const REGISTERED = 'REGISTERED';
export const DIDNT_REGISTER = 'DIDNT_REGISTER';

export const LOGIN = 'LOGIN';
export const LOGGED = 'LOGGED';
export const DIDNT_LOGIN = 'DIDNT_LOGIN';

export const GET_USER = 'GET_USER';
export const GOT_USER = 'GOT_USER';
export const DIDNT_GET_USER = 'DIDNT_GET_USER';

export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDITED_PROFILE = 'EDITED_PROFILE';
export const DIDNT_EDIT_PROFILE = 'DIDNT_REDIT_PROFILE';

export const DELETE_USER = 'DELETE_USER';
export const DELETED_USER = 'DELETED_USER';
export const DIDNT_DELETE_USER = 'DIDNT_DELETE_USER';

export const GET_QLIST = 'GET_QLIST';
export const GOT_QLIST = 'GOT_QLIST';
export const DIDNT_GET_QLIST = 'DIDNT_GET_QLIST';

export const ADD_Q = 'ADD_Q';
export const ADDED_Q = 'ADDED_Q';
export const DIDNT_ADD_QLIST = 'DIDNT_ADD_QLIST';

export const EDIT_Q = 'EDIT_Q';
export const EDITED_Q = 'EDITED_Q';
export const DIDNT_EDIT_QLIST = 'DIDNT_EDIT_QLIST';

export const DELETE_Q = 'DELETE_Q';
export const DELETED_Q = 'DELETED_Q';
export const DIDNT_DELETE_QLIST = 'DIDNT_DELETE_QLIST';   

const apiURL = 'https://niyon.herokuapp.com'


export const registerNew = () => dispatch => {
      dispatch({ type: REGISTER });
      axios
            .post(`${apiURL}/api/auth/register`)
            .then(res => {
                  console.log('registered', res)
                  dispatch({ type: REGISTERED, payload: res.data })
            })
            .catch(err => {
                  console.log('didnt register', err)
                  dispatch({ type: DIDNT_REGISTER, payload: res.data })
            })
}

export const login = () => dispatch => {
      dispatch({ type: LOGIN });
      axios
            .post(`${apiURL}/api/auth/register/login`)
            .then(res => {
                  console.log('logged', res)
                  dispatch({ type: LOGGED, payload: res.data })
            })
            .catch(err => {
                  console.log('didnt login', err)
                  dispatch({ type: DIDNT_LOGIN, payload: res.data })
            })
}

export const getUser = id => dispatch => {
      dispatch({ type: GET_USER });
      axios
            .get(`${apiURL}/api/profile/${id}`)
            .then(res => {
                  console.log('got user', res)
                  dispatch({ type: GOT_USER, payload: res.data })
            })
            .catch(err => {
                  console.log('didnt get user', err)
                  dispatch({ type: DIDNT_GET_USER, payload: res.data })
            })
}

export const editProfile = id => dispatch => {
      dispatch({ type: EDIT_PROFILE });
      axios
            .put(`${apiURL}/api/profile/${id}`)
            .then(res => {
                  console.log('edited profile', res)
                  dispatch({ type: EDITED_PROFILE, payload: res.data })
            })
            .catch(err => {
                  console.log('didnt edit profile', err)
                  dispatch({ type: DIDNT_EDIT_PROFILE, payload: res.data })
            })
}

export const deleteUser = id => dispatch => {
      dispatch({ type: DELETE_USER });
      axios
            .delete(`${apiURL}/api/profile/${id}`)
            .then(res => {
                  console.log('deleted user', res)
                  dispatch({ type: DELETED_USER, payload: res.data })
            })
            .catch(err => {
                  console.log('didnt add user', err)
                  dispatch({ type: DIDNT_DELETE_USER, payload: res.data })
            })
}