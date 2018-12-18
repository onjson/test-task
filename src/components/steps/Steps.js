import React from 'react';
import PropTypes from 'prop-types';
import { Step } from 'semantic-ui-react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { utils } from '../../helpers';

const Steps = ({ step }) => (
  <Step.Group className="custom-steps" ordered>
    <Step completed={step > 1} active={step === 1} className="custom-step">
      <Step.Content>
        <Step.Title
          className={classnames(
            { completed: step > 1 },
            { active: step === 1 },
          )}
        >
          Discovery Source
        </Step.Title>
        <Step.Description
          className={classnames(
            { completed: step > 1 },
            { active: step === 1 },
          )}
        >
          1
        </Step.Description>
      </Step.Content>
    </Step>
    <Step completed={step > 2} active={step === 2} className="custom-step">
      <Step.Content>
        <Step.Title
          className={classnames(
            { completed: step > 2 },
            { active: step === 2 },
          )}
        >
          DiscoveryOptions
        </Step.Title>
        <Step.Description
          className={classnames(
            { completed: step > 2 },
            { active: step === 2 },
          )}
        >
          2
        </Step.Description>
      </Step.Content>
    </Step>
    <Step completed={step > 3} active={step === 3} className="custom-step">
      <Step.Content>
        <Step.Title
          className={classnames(
            { completed: step > 3 },
            { active: step === 3 },
          )}
        >
          Discovery Input Data
        </Step.Title>
        <Step.Description
          className={classnames(
            { completed: step > 3 },
            { active: step === 3 },
          )}
        >
          3
        </Step.Description>
      </Step.Content>
    </Step>
    <Step completed={step > 4} active={step === 4} className="custom-step">
      <Step.Content>
        <Step.Title
          className={classnames(
            { completed: step > 4 },
            { active: step === 4 },
          )}
        >
          Summary
        </Step.Title>
        <Step.Description
          className={classnames(
            { completed: step > 4 },
            { active: step === 4 },
          )}
        >
          4
        </Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

Step.propTypes = {
  step: PropTypes.number,
};

Step.defaultProps = {
  step: null,
};

const mapStateToProps = ({ form, discover: { open } }) => {
  const step = utils.getStep(form, open);

  return {
    step,
  };
};

export default connect(mapStateToProps)(Steps);
