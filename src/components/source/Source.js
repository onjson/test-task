import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { SourceForm } from './index';

class Source extends PureComponent {
  static propTypes = {
    source: PropTypes.string,
    ipRangeError: PropTypes.string,
  };

  static defaultProps = {
    source: null,
    ipRangeError: null,
  };

  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { isOpen } = this.state;
    const { source, ipRangeError } = this.props;

    return (
      <Segment inverted>
        <Accordion inverted>
          <Accordion.Title active={isOpen} onClick={this.handleClick}>
            <Icon name="dropdown" />
            Discovery Source
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <SourceForm source={source} ipRangeError={ipRangeError} />
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

const mapStateToProps = (state) => ({
  source: get(state, 'form.source.values.inputType', null),
  ipRangeError: get(state, 'form.source.syncErrors.ipRange', null),
});

export default connect(mapStateToProps)(Source);
