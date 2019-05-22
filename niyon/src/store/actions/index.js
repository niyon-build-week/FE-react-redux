import axios from 'axios';

// user login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_WIN = 'LOGIN_WIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = () => dispatch => {
      dispatch({ type: LOGIN_START });
      return axios 
            .post('https://niyon.herokuapp.com/api/auth/login')
            .then( res => {
                  console.log('log in win!', res)
                  dispatch({ type: LOGIN_WIN, payload: {token: res.data} })
            })
            .catch(err => {
                  console.log('login fail', err)
                  dispatch({ type: LOGIN_FAIL, payload: err })
            })
}
//fetch profile
export const FETCH_START = 'FETCH_START';
export const FETCH_WIN = 'FETCH_WIN';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchProfile = () => dispatch => {
      dispatch({ type: FETCH_START });
      axios 
            .get('https://niyon.herokuapp.com/api/profile/:id')
            .then( res => {
                  console.log('fetch win!', res)
                  dispatch({ type: FETCH_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('fetch fail', err)
                  dispatch({ type: FETCH_FAIL, payload: err })
            })
}

//register new user
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_WIN = 'REGISTER_WIN';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const addProfile = user => dispatch => {
      dispatch({ type: REGISTER_START });
      axios 
            .put('https://niyon.herokuapp.com/api/auth/register', user)
            .then( res => {
                  console.log('register win!', res)
                  dispatch({ type: REGISTER_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('register fail', err)
                  dispatch({ type: REGISTER_FAIL, payload: err })
            })
}

//update user profile
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_WIN = 'UPDATE_PROFILE_WIN';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export const updateProfile = () => dispatch => {
      dispatch({ type: UPDATE_PROFILE_START });
      axios 
            .put('https://niyon.herokuapp.com/api/profile/:id')
            .then( res => {
                  console.log('update profile win!', res)
                  dispatch({ type: UPDATE_PROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('update profile fail', err)
                  dispatch({ type: UPDATE_PROFILE_FAIL, payload: err })
            })
}

//delete user profile
export const DELETE_PROFILE_START = 'DELETE_PROFILE_START';
export const DELETE_PROFILE_WIN = 'DELETE_PROFILE_WIN';
export const DELETE_PROFILE_FAIL = 'DELETE_PROFILE_FAIL';

export const removeProfile = () => dispatch => {
      dispatch({ type: DELETE_PROFILE_START });
      axios 
            .delete('https://niyon.herokuapp.com/api/profile/:id')
            .then( res => {
                  console.log('delete profile win!', res)
                  dispatch({ type: DELETE_PROFILE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('delete profile fail', err)
                  dispatch({ type: DELETE_PROFILE_FAIL, payload: err })
            })
}


//add question
export const ADD_QUESTION_START = 'ADD_QUESTION_START'; 
export const ADD_QUESTION_WIN = 'ADD_QUESTION_WIN';
export const ADD_QUESTION_FAIL = 'ADD_QUESTION_FAIL';

export const addQuestion = () => dispatch => {
      dispatch ({ type: ADD_QUESTION_START });
      axios
            .post('https://niyon.herokuapp.com/api/questions/')
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
            .put('https://niyon.herokuapp.com/api/questions/:id')
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
            .delete('https://niyon.herokuapp.com/api/questions/:id')
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
// export const ADD_ADVICE_START = 'ADD_ADVICE_START'; 
// export const ADD_ADVICE_WIN = 'ADD_ADVICE_WIN';
// export const ADD_ADVICE_FAIL = 'ADD_ADVICE_FAIL';

// export const addAdvice = () => dispatch => {
//       dispatch ({ type: ADD_ADVICE_START });
//       axios
//             .post('url for advice')
//             .then( res => {
//                   console.log('add advice win!', res)
//                   dispatch({ type: ADD_ADVICE_WIN, payload: res.data })
//             })
//             .catch(err => {
//                   console.log('add advice fail', err)
//                   dispatch({ type: ADD_ADVICE_FAIL, payload: err })
//             })
// }

