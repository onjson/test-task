import action from './utils';

export const VALIDATE_IP_RANGE_FAILURE = 'VALIDATE_IP_RANGE_FAILURE';
export const VALIDATE_IP_RANGE_SUCCESS = 'VALIDATE_IP_RANGE_SUCCESS';

export const validateIpRangeFailure = (payload) =>
  action(VALIDATE_IP_RANGE_FAILURE, {
    payload,
  });

export const validateIpRangeSuccess = () =>
  action(VALIDATE_IP_RANGE_SUCCESS, {});
