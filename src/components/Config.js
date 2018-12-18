import React from 'react';
import { Container, Grid, Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import {
  SourceContainer,
  Options,
  SNMPOptionsContainer,
  Steps,
  Footer,
} from './index';
import { utils } from '../helpers';

const Config = ({ snmp, isSourceCompleted }) => (
  <Container>
    <Grid>
      <Responsive as={Grid.Row} minWidth={768}>
        <Steps />
      </Responsive>
      <Grid.Row columns={2}>
        <Grid.Column floated="left" mobile={16} tablet={8} computer={7}>
          <SourceContainer />
        </Grid.Column>
        <Grid.Column floated="right" mobile={16} tablet={8} computer={7}>
          {isSourceCompleted && <Options />}
        </Grid.Column>
      </Grid.Row>
      {isSourceCompleted && snmp && (
        <Grid.Row>
          <Grid.Column>
            <SNMPOptionsContainer />
          </Grid.Column>
        </Grid.Row>
      )}
      <Grid.Row>
        <Grid.Column>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

const mapStateToProps = ({ form }) => ({
  isSourceCompleted: utils.checkThatSourceCompleted(form),
  snmp: get(form, 'options.values.SNMP', false),
});

export default connect(mapStateToProps)(Config);
