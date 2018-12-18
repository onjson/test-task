import { discoverActions as actions } from '../actions';

const initialState = {
  open: false,
  config: null,
};

export default function discover(state = initialState, action) {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        open: true,
        config: action.config,
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        open: false,
        config: null,
      };
    default:
      return state;
  }
}
