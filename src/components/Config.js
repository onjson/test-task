import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { SourceContainer, Options, SNMPOptionsContainer } from './index';

import styles from './Config.module.css';

const Config = ({ snmp }) => (
  <div className={styles.main}>
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={7}>
            <SourceContainer />
          </Grid.Column>
          <Grid.Column floated="right" width={7}>
            <Options />
          </Grid.Column>
        </Grid.Row>
        {snmp && (
          <Grid.Row>
            <Grid.Column>
              <SNMPOptionsContainer />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Container>
  </div>
);

const mapStateToProps = (state) => ({
  snmp: get(state, 'form.options.values.SNMP', false),
});

export default connect(mapStateToProps)(Config);
