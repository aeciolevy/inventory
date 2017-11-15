import { FETCH_USERS } from './types';
import { get } from '../utils/fetch';

const URL = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers () {
  return async function (dispatch) {
    const data = await get(URL);
    dispatch({ type: FETCH_USERS, payload: data})
  };
}
