import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
  state = {
    activeTab: 2
  }

  render() {
    const cell = (
      <Cell col={4}>
                <Card shadow={5} style={{ minWidth: 400, margin: 'auto' }}>
                  <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                  <CardActions border>
                    <Button colored>Get Started</Button>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
    )
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MariaDB</Tab>
        </Tabs>
        <section>
          <div className="project-list">
            <Grid>
              {cell}
              {cell}
              {cell}
              {cell}
              {cell}
              {cell}
            </Grid>
          </div>
        </section>
      </div>
    );
  }
}

export default Project;