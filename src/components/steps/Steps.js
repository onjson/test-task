import React from 'react';
import PropTypes from 'prop-types';
import { Step } from 'semantic-ui-react';
import classnames from 'classnames';

const Steps = () => (
  <Step.Group ordered>
    <Step completed className="custom-step">
      <Step.Content>
        <Step.Title className={classnames('completed')}>Shipping</Step.Title>
        <Step.Description className={classnames('completed')}>
          1
        </Step.Description>
      </Step.Content>
    </Step>
    <Step completed className="custom-step">
      <Step.Content>
        <Step.Title className={classnames('completed')}>Billing</Step.Title>
        <Step.Description className={classnames('completed')}>
          2
        </Step.Description>
      </Step.Content>
    </Step>
    <Step active className="custom-step">
      <Step.Content>
        <Step.Title className={classnames('active')}>Confirm Order</Step.Title>
        <Step.Description className={classnames('active')}>3</Step.Description>
      </Step.Content>
    </Step>
    <Step className="custom-step">
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>4</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default Steps;
