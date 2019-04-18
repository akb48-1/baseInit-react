import React, { Component } from 'react';
import { Layout, Icon, Button } from 'antd';
import Panle from './panle';
const { Header, Content } = Layout;

console.log(Panle)
class Container extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', paddingLeft: '10px', marginLeft: '15px' }}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />
                </Header>
                <Content
                    style={{
                        margin: '15px 0 0 15px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                >
                    <Panle />
                </Content>
            </Layout>
        );
    }
}

export default Container;
