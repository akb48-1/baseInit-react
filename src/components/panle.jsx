import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import Page2 from '../components/page2/page';

const TabPane = Tabs.TabPane;

console.log(Page2)
// class El2 extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this)
//         return (
//             this.props.render()
//         );
//     }
// }

function El2(props) {
    console.log(props.render)
    return <props.render />
}

class Panle extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            {
                title: 'Tab 1',
                content: 'Content of Tab Pane 1',
                key: '1',
                component: () => require('../components/page1/page.jsx'),
                componentURL: '../components/page1/page.jsx'
            }, {
                title: 'Tab2',
                content: 'Content of Tab Pane 2',
                key: '2',
                component: () => require('../components/page2/page.jsx'),
                componentURL: '../components/page2/page.jsx'
            }, {
                title: 'Tab3',
                content: 'Content of Tab Pane 3',
                key: '3',
                component: () => require('../components/page3/page.jsx'),
                componentURL: '../components/page3/page.jsx'
            }
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane' + this.newTabIndex, key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <div>
                {/* <Page2 /> */}
                <div style={{ marginBottom: 16 }}>
                    {/* <Button onClick={this.add}>ADD</Button> */}
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {

                        this.state.panes.map(pane =>
                            <TabPane tab={pane.title} key={pane.key}>
                                {
                                    console.log(6666)
                                }
                                {pane.content}
                                {
                                    // <El2 render={() => require(pane.componentURL)} />
                                    <El2 render={pane.component} />
                                }
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        );
    }
}



export default Panle