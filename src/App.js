import React from 'react';
import { Provider } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import {
  SourceContainer,
  OptionsContainer,
  SNMPOptionsContainer,
} from './components';
import configureStore from './store';

import styles from './App.module.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className={styles.main}>
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column floated="left" width={7}>
              <SourceContainer />
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <OptionsContainer />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SNMPOptionsContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  </Provider>
);

export default App;
