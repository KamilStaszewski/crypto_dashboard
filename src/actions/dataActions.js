import { FETCH_USERSDATA } from '../constants/constants';

export const fetchData = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(posts =>
    dispatch({
      type: FETCH_USERSDATA,
      payload: posts
    })
  );
};
