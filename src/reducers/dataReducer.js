import { FETCH_USERSDATA } from '../constants/constants';

const initialState = {
  users: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERSDATA:
      return {
        ...state, users: action.payload
      };
    default:
      return state;
  };
};