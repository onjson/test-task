import action from './utils';

export const CUSTOM_VALIDATE_FAILURE = 'CUSTOM_VALIDATE_FAILURE';
export const CUSTOM_VALIDATE_SUCCESS = 'CUSTOM_VALIDATE_SUCCESS';

export const customValidateFailure = (field, message) =>
  action(CUSTOM_VALIDATE_FAILURE, {
    field,
    message,
  });

export const customValidateSuccess = (field) =>
  action(CUSTOM_VALIDATE_SUCCESS, { field });
