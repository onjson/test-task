import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import discover from './discover';
import { reduxFormActions as actions } from '../actions';

const form = formReducer.plugin({
  source: (state, action) => {
    switch (action.type) {
      case actions.CUSTOM_VALIDATE_FAILURE:
        return {
          ...state,
          syncErrors: {
            ...state.syncErrors,
            [action.field]: action.message,
          },
        };
      case actions.CUSTOM_VALIDATE_SUCCESS:
        return {
          ...state,
          syncErrors: {
            ...state.syncErrors,
            [action.field]: undefined,
          },
        };
      default:
        return state;
    }
  },
});

export default combineReducers({ discover, form });
