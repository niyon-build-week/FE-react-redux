import axios from 'axios';

// user login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_WIN = 'LOGIN_WIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = () => dispatch => {
      dispatch({ type: LOGIN_START });
      axios 
            .get('url for user')
            .then( res => {
                  console.log('log in win!', res)
                  dispatch({ type: LOGIN_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('login fail', err)
                  dispatch({ type: LOGIN_FAIL, payload: err })
            })
}

// //expert user login
// export const XLOGIN_START = 'XLOGIN_START';
// export const XLOGIN_WIN = 'XLOGIN_WIN';
// export const XLOGIN_FAIL = 'XLOGIN_FAIL';

// export const expertLogin = () => dispatch => {
//       dispatch({ type: XLOGIN_START });
//       axios 
//             .get('url for user')
//             .then( res => {
//                   console.log('log in win!', res)
//                   dispatch({ type: XLOGIN_WIN, payload: res.data })
//             })
//             .catch(err => {
//                   console.log('login fail', err)
//                   dispatch({ type: XLOGIN_FAIL, payload: err })
//             })
// }

//fetch question feed
export const FETCH_START = 'FETCH_START';
export const FETCH_WIN = 'FETCH_WIN';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchQ = () => dispatch => {
      dispatch({ type: FETCH_START });
      return axios 
            .get('url for feed data')
            .then( res => {
                  console.log('fetch win!', res)
                  dispatch({ type: FETCH_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('fetch fail', err)
                  dispatch({ type: FETCH_FAIL, payload: err })
            })
}

//add new user
export const ADD_PROFILE_START = 'ADD_PROFILE_START';
export const ADD_PROFILE_WIN = 'ADD_PROFILE_WIN';
export const ADD_PROFILE_FAIL = 'ADD_PROFILE_FAIL';

export const addProfile = () => dispatch => {
      dispatch({ type: ADD_PROFILE_START });
      axios 
            .put('url for profile')
            .then( res => {
                  console.log('add win!', res)
                  dispatch({ type: ADD_PROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('add fail', err)
                  dispatch({ type: ADD_PROFILE_FAIL, payload: err })
            })
}

//add expert user
export const ADD_XPROFILE_START = 'ADD_XPROFILE_START';
export const ADD_XPROFILE_WIN = 'ADD_XPROFILE_WIN';
export const ADD_XPROFILE_FAIL = 'ADD_XPROFILE_FAIL';

export const addXProfile = () => dispatch => {
      dispatch({ type: ADD_XPROFILE_START });
      axios 
            .put('url for expert profile')
            .then( res => {
                  console.log('add expert win!', res)
                  dispatch({ type: ADD_XPROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('add expert fail', err)
                  dispatch({ type: ADD_XPROFILE_FAIL, payload: err })
            })
}

//add question
export const ADD_QUESTION_START = 'ADD_QUESTION_START'; 
export const ADD_QUESTION_WIN = 'ADD_QUESTION_WIN';
export const ADD_QUESTION_FAIL = 'ADD_QUESTION_FAIL';

export const addQuestion = () => dispatch => {
      dispatch ({ type: ADD_QUESTION_START });
      axios
            .post('url for question feed')
            .then( res => {
                  console.log('add ? win!', res)
                  dispatch({ type: ADD_QUESTION_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('add ? fail', err)
                  dispatch({ type: ADD_QUESTION_FAIL, payload: err })
            })
}

//edit question
export const UPDATE_QUESTION_START = 'UPDATE_QUESTION_START'; 
export const UPDATE_QUESTION_WIN = 'UPDATE_QUESTION_WIN';
export const UPDATE_QUESTION_FAIL = 'UPDATE_QUESTION_FAIL';

export const updateQuestion = () => dispatch => {
      dispatch ({ type: UPDATE_QUESTION_START });
      axios
            .put('url for question feed')
            .then( res => {
                  console.log('edit ? win!', res)
                  dispatch({ type: UPDATE_QUESTION_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('edit ? fail', err)
                  dispatch({ type: UPDATE_QUESTION_FAIL, payload: err })
            })
}

//remove question
export const REMOVE_QUESTION_START = 'REMOVE_QUESTION_START'; 
export const REMOVE_QUESTION_WIN = 'REMOVE_QUESTION_WIN';
export const REMOVE_QUESTION_FAIL = 'REMOVE_QUESTION_FAIL';

export const removeQuestion = () => dispatch => {
      dispatch ({ type: REMOVE_QUESTION_START });
      axios
            .delete('url for question feed')
            .then( res => {
                  console.log('delete ? win!', res)
                  dispatch({ type: REMOVE_QUESTION_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('delete ? fail', err)
                  dispatch({ type: REMOVE_QUESTION_FAIL, payload: err })
            })
}

//add advice
export const ADD_ADVICE_START = 'ADD_ADVICE_START'; 
export const ADD_ADVICE_WIN = 'ADD_ADVICE_WIN';
export const ADD_ADVICE_FAIL = 'ADD_ADVICE_FAIL';

export const addAdvice = () => dispatch => {
      dispatch ({ type: ADD_ADVICE_START });
      axios
            .post('url for advice')
            .then( res => {
                  console.log('add advice win!', res)
                  dispatch({ type: ADD_ADVICE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('add advice fail', err)
                  dispatch({ type: ADD_ADVICE_FAIL, payload: err })
            })
}

//edit advice
// export const UPDATE_ADVICE_START = 'UPDATE_ADVICE_START'; 
// export const UPDATE_ADVICE_WIN = 'UPDATE_ADVICE_WIN';
// export const UPDATE_ADVICE_FAIL = 'UPDATE_ADVICE_FAIL';

// export const updateAdvice = () => dispatch => {
//       dispatch ({ type: UPDATE_ADVICE_START });
//       axios
//             .put('url for advice')
//             .then( res => {
//                   console.log('edit advice win!', res)
//                   dispatch({ type: UPDATE_ADVICE_WIN, payload: res.data })
//             })
//             .catch(err => {
//                   console.log('edit advice fail', err)
//                   dispatch({ type: UPDATE_ADVICE_FAIL, payload: err })
//             })
// }

//remove advice
// export const REMOVE_ADVICE_START = 'REMOVE_ADVICE_START'; 
// export const REMOVE_ADVICE_WIN = 'REMOVE_ADVICE_WIN';
// export const REMOVE_ADVICE_FAIL = 'REMOVE_ADVICE_FAIL';

// export const removeAdvice = () => dispatch => {
//       dispatch ({ type: REMOVE_ADVICE_START });
//       axios
//             .delete('url for advice')
//             .then( res => {
//                   console.log('delete advice win!', res)
//                   dispatch({ type: REMOVE_ADVICE_WIN, payload: res.data })
//             })
//             .catch(err => {
//                   console.log('delete advice fail', err)
//                   dispatch({ type: REMOVE_ADVICE_FAIL, payload: err })
//             })
// }


//update user profile
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_WIN = 'UPDATE_PROFILE_WIN';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export const updateProfile = () => dispatch => {
      dispatch({ type: UPDATE_PROFILE_START });
      axios 
            .put('url for profile')
            .then( res => {
                  console.log('update win!', res)
                  dispatch({ type: UPDATE_PROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('update fail', err)
                  dispatch({ type: UPDATE_PROFILE_FAIL, payload: err })
            })
}

//update expert profile
export const UPDATE_XPROFILE_START = 'UPDATE_XPROFILE_START';
export const UPDATE_XPROFILE_WIN = 'UPDATE_XPROFILE_WIN';
export const UPDATE_XPROFILE_FAIL = 'UPDATE_XPROFILE_FAIL';

export const updateXProfile = () => dispatch => {
      dispatch({ type: UPDATE_XPROFILE_START });
      axios 
            .put('url for expert profile')
            .then( res => {
                  console.log('update win!', res)
                  dispatch({ type: UPDATE_XPROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('update fail', err)
                  dispatch({ type: UPDATE_XPROFILE_FAIL, payload: err })
            })
}

//delete user profile
export const DELETE_PROFILE_START = 'DELETE_PROFILE_START';
export const DELETE_PROFILE_WIN = 'DELETE_PROFILE_WIN';
export const DELETE_PROFILE_FAIL = 'DELETE_PROFILE_FAIL';

export const removeProfile = () => dispatch => {
      dispatch({ type: DELETE_PROFILE_START });
      axios 
            .delete('url')
            .then( res => {
                  console.log('delete profile win!', res)
                  dispatch({ type: DELETE_PROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('delete profile fail', err)
                  dispatch({ type: DELETE_PROFILE_FAIL, payload: err })
            })
}

//delete expert profile
export const DELETE_XPROFILE_START = 'DELETE_XPROFILE_START';
export const DELETE_XPROFILE_WIN = 'DELETE_XPROFILE_WIN';
export const DELETE_XPROFILE_FAIL = 'DELETE_XPROFILE_FAIL';

export const removeXProfile = () => dispatch => {
      dispatch({ type: DELETE_XPROFILE_START });
      axios 
            .delete('url')
            .then( res => {
                  console.log('delete expert win!', res)
                  dispatch({ type: DELETE_XPROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('delete expert fail', err)
                  dispatch({ type: DELETE_XPROFILE_FAIL, payload: err })
            })
}


