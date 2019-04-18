import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import LeftMenu from './components/leftMenu';
import Container from './components/container';
import './App.scss';

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <div id="logo" >
            <a href="">
              <img src={'img/logo.svg'} /></a>
              React
          </div>
          <div id="nav" >nav</div>
        </header>
        <Layout id="Layout" style={{ padding: '10px 15px' }}>
          <LeftMenu collapsed={this.state.collapsed} />
          <Container toggle={this.toggle} collapsed={this.state.collapsed} />
        </Layout>
      </div>
    );
  }
}

export default App;
