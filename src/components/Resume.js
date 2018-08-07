import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Aboutme, Education, Employment } from 'components';

class Resume extends Component {
  render() {
    return (
      <div className="resume-list">
        <Grid>
          <Cell className="resume-left" col={4}>
            <Aboutme />
          </Cell>
          <Cell className="resume-right" col={8}>
            <Education />
            <hr />
            <Employment />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;