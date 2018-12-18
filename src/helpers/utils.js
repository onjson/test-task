import get from 'lodash.get';

import { IP, IP_RANGE, CSV } from '../constants';

export const ip2int = (ip) =>
  // eslint-disable-next-line
  ip
    .split('.')
    .reduce((ipInt, octet) => 
      // eslint-disable-next-line
      (ipInt << 8) + parseInt(octet, 10),
    0,
  ) >>> 0;

export const checkThatSourceCompleted = (forms) => {
  const values = get(forms, 'source.values', null);
  const inputType = get(forms, 'source.values.inputType', null);

  if (!values || !inputType) return false;

  switch (inputType) {
    case IP:
      return !!values.ipAddress;
    case IP_RANGE:
      return !!values.startIPAddress && !!values.endIPAddress;
    case CSV:
      return !!values.fileName;
    default:
      return false;
  }
};

export const getStep = (form, open) => {
  const isSourceCompleted = checkThatSourceCompleted(form);
  const isSNMP = get(form, 'options.values.SNMP', false);

  if (!isSourceCompleted) return 1;
  if (isSourceCompleted && !isSNMP) return 2;
  if (isSourceCompleted && isSNMP && !open) return 3;
  if (isSourceCompleted && isSNMP && open) return 4;
  return 0;
};
