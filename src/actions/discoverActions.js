import action from './utils';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (config) =>
  action(OPEN_MODAL, {
    config,
  });

export const closeModal = () => action(CLOSE_MODAL, {});
