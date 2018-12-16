import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import reducer from './reducer';
import {
  VALIDATE_IP_RANGE_FAILURE,
  VALIDATE_IP_RANGE_SUCCESS,
} from '../actions/actions';

const form = formReducer.plugin({
  source: (state, action) => {
    switch (action.type) {
      case VALIDATE_IP_RANGE_FAILURE:
        return {
          ...state,
          syncErrors: {
            ...state.syncErrors,
            ipRange: action.payload,
          },
        };
      case VALIDATE_IP_RANGE_SUCCESS:
        return {
          ...state,
          syncErrors: {
            ...state.syncErrors,
            ipRange: undefined,
          },
        };
      default:
        return state;
    }
  },
});

export default combineReducers({ app: reducer, form });
