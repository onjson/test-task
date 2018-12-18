import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { reset } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { discover } from '../../helpers';
import { discoverActions } from '../../actions';
import { ConfigModal } from './index';

import styles from './Footer.module.css';

// eslint-disable-next-line
const Footer = ({forms, open, config, resetForms, openModal, closeModal}) =>  {
  const resetAll = () => {
    Object.keys(forms).forEach((name) => resetForms(name));
  };

  const onOpenModal = () => {
    openModal(discover(forms));
  };

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <Button floated="left" onClick={resetAll}>
        Clear
      </Button>
      <Button floated="right" color="green" onClick={onOpenModal}>
        Discover
      </Button>
      <ConfigModal open={open} data={config} onClose={onCloseModal} />
    </div>
  );
};

Footer.propTypes = {
  forms: PropTypes.object.isRequired,
  config: PropTypes.object,
  open: PropTypes.bool.isRequired,
  resetForms: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  config: null,
};

const mapStateToProps = ({ form, discover: { open, config } }) => ({
  forms: form,
  open,
  config,
});

const mapDispatchTopProps = (dispatch) =>
  bindActionCreators(
    {
      resetForms: reset,
      openModal: discoverActions.openModal,
      closeModal: discoverActions.closeModal,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(Footer);
