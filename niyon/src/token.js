import { LOGIN_WIN } from './store/actions/index';

export const addTokenToLocalStorage = store => next => action => {
      if (action.type === LOGIN_WIN) {
            console.log(action);
            localStorage.setItem('userToken', action.payload.token);
      }
      next(action);
};