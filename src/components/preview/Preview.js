import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { IncomeContainer } from 'containers';

class Preview extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6}><IncomeContainer /></Cell>
        <Cell col={6}></Cell>
      </Grid>
    );
  }
}

export default Preview;