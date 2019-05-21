import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_WIN = 'LOGIN_WIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = () => dispatch => {
      dispatch({ type: LOGIN_START });
      axios 
            .get('url')
            .then( res => {
                  console.log('log in win!', res)
                  dispatch({ type: LOGIN_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('login fail', err)
                  dispatch({ type: LOGIN_FAIL, payload: err })
            })
}

export const FETCH_START = 'FETCH_START';
export const FETCH_WIN = 'FETCH_WIN';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetch = () => dispatch => {
      dispatch({ type: FETCH_START });
      axios 
            .get('url/data')
            .then( res => {
                  console.log('fetch win!', res)
                  dispatch({ type: FETCH_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('fetch fail', err)
                  dispatch({ type: FETCH_FAIL, payload: err })
            })
}

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_WIN = 'UPDATE_WIN';
export const UPDATE_FAIL = 'UPDATE_FAIL';

export const update = () => dispatch => {
      dispatch({ type: UPDATE_START });
      axios 
            .put('url/data')
            .then( res => {
                  console.log('update win!', res)
                  dispatch({ type: UPDATE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('update fail', err)
                  dispatch({ type: UPDATE_FAIL, payload: err })
            })
}

export const DELETE_START = 'DELETE_START';
export const DELETE_WIN = 'DELETE_WIN';
export const DELETE_FAIL = 'DELETE_FAIL';

export const remove = () => dispatch => {
      dispatch({ type: DELETE_START });
      axios 
            .delete('url')
            .then( res => {
                  console.log('delete win!', res)
                  dispatch({ type: DELETE_WIN, payload: res.data })
            })
            .catch(err => {
                  console.log('delete fail', err)
                  dispatch({ type: DELETE_FAIL, payload: err })
            })
}

