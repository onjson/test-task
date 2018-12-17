import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <Button floated="left">Clear</Button>
    <Button floated="right" color="green">
      Discover
    </Button>
  </div>
);

export default Footer;
