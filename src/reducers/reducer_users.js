import { FETCH_USERS } from '../action/types';

export default function (state = [], action) {
  const { type, payload } = action;
  switch(type){
    case FETCH_USERS: {
      return [...state, ...payload];
    }
    default:
      return state;
  }
}
