import React, { Component } from 'react';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import { CommonStyle } from 'styles';
import { Main, Menu } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header title="Title" scroll className="app-header">
            <Menu />
          </Header>
          <Drawer title="Title">
            <Menu />
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
