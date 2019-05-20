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