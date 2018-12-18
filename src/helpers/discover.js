import get from 'lodash.get';

import { IP, IP_RANGE, CSV } from '../constants';

export const createSource = (source, config) => {
  const result = { ...config };

  if (source) {
    const { inputType } = source;
    result.inputType = inputType;

    switch (inputType) {
      case IP:
        result.ipAddress = get(source, 'ipAddress', null);
        break;
      case IP_RANGE:
        result.startIPAddress = get(source, 'startIPAddress', null);
        result.endIPAddress = get(source, 'endIPAddress', null);
        break;
      case CSV:
        result.fileName = get(source, 'fileName', null);
        break;
      default:
        break;
    }
  }

  return result;
};

export const createOptions = (options, config) => {
  const result = { ...config };
  const optArray =
    options &&
    Object.entries(options).reduce((acc, [key, value]) => {
      if (value) {
        return [...acc, key];
      }
      return acc;
    }, []);

  result.options = optArray && optArray.length ? optArray : null;

  return result;
};

export const createSNMPConfig = (snmpConfig, config) => {
  const result = { ...config };
  if (snmpConfig && result.options && result.options.includes('SNMP')) {
    const { version } = snmpConfig;
    const initConfigs = {
      snmpv1: null,
      snmpv2: null,
      snmpv3: null,
    };
    result.snmpConfig = { ...snmpConfig, ...initConfigs };
    result.snmpConfig[`snmpv${version}`] = get(
      snmpConfig,
      `snmpv${version}`,
      null,
    );
  }
  return result;
};

export default (forms) => {
  const source = get(forms, 'source.values', null);
  const options = get(forms, 'options.values', null);
  const snmpConfig = get(forms, 'snmpConfig.values', null);

  let result = {
    inputType: null,
    options: null,
    snmpConfig: null,
  };

  result = createSource(source, result);
  result = createOptions(options, result);
  result = createSNMPConfig(snmpConfig, result);
  return { content: result };
};
