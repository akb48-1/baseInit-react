import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
import leftNav from '../util/leftNav';
const SubMenu = Menu.SubMenu;
console.log(leftNav)

const tree = (arr) => {
    return arr.map((obj, index) => {
        if (obj.children && obj.children.length) {
            return (
                <SubMenu
                    key={obj.id}
                    title={<span><Icon type="user" /> <span>{obj.label}-40</span></span>}
                >
                    {
                        tree(obj.children)
                    }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={obj.id} onClick={() => { console.log(obj.render())}}>
                    <Icon type={obj.iconType} />
                    <span>{obj.label}</span>
                </Menu.Item>
            )
        }
    })
}
class Tree extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {tree(leftNav)}
            </Menu>
        );
    }
}

export default Tree;
