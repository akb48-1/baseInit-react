import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const menu = [
    {
        title: '菜单1',
        id: '1',
        iconType: 'user'
    }, {
        title: '菜单2',
        id: '2',
        iconType: 'user'
    }, {
        title: '菜单3',
        id: '3',
        iconType: 'user',
        child: [
            {
                title: '菜单3-1',
                id: '3-1',
                iconType: 'user'
            }, {
                title: '菜单3-2',
                id: '3-2',
                iconType: 'user',
                child: [
                    {
                        title: '菜单3-2-1',
                        id: '3-2-1',
                        iconType: 'user'
                    }, {
                        title: '菜单3-2-2',
                        id: '3-2-2',
                        iconType: 'user'
                    }, {
                        title: '菜单3-2-3',
                        id: '3-2-3',
                        iconType: 'user',
                        child: [
                            {
                                title: '菜单3-2-3-1',
                                id: '3-2-3-1',
                                iconType: 'user'
                            }, {
                                title: '菜单3-2-3-2',
                                id: '3-2-3-2',
                                iconType: 'user'
                            }, {
                                title: '菜单3-2-3-3',
                                id: '3-2-3-3',
                                iconType: 'user'
                            },
                        ]
                    },
                ]
            }, {
                title: '菜单3-3',
                id: '3-3',
                iconType: 'user'
            },
        ]
    }, {
        title: '菜单4',
        id: '4',
        iconType: 'user'
    }
]
const tree = (arr) => {
    return arr.map((obj, index) => {
        if (obj.child && obj.child.length) {
            return (
                <SubMenu
                    key={obj.id}
                    title={<span><Icon type="user" /> <span>{obj.title}</span></span>}
                >
                    {
                        tree(obj.child)
                    }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={obj.id}>
                    <Icon type={obj.iconType} />
                    <span>{obj.title}</span>
                </Menu.Item>
            )
        }
    })
}
class Tree extends Component {
    render() {
        return (
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {tree(menu)}
                </Menu>
        );
    }
}

export default Tree;
