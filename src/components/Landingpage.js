import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/210px-React-icon.svg.png" alt="react" className="landing-img"/>
            <div className="landing-text">
              <h1>Development</h1>
              <hr/>
              <p>HTML/CSS | JavaScipt | Bootstrap | React | NodeJS | Koa</p>
            </div>
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default Landingpage;