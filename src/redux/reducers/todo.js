import { ADD_TODO } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state };

    default:
      return state;
  }
};
