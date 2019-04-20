import React, { Component } from 'react';
import { Tabs } from 'antd';
import img from '../logo.svg';
import Loadable from 'react-loadable';

const TabPane = Tabs.TabPane;
const panes = [
    {
        title: 'Tab 1',
        content: 'Content of Tab Pane 1',
        key: '1',
        component: require('../components/page1/page.jsx').default
    }, {
        title: 'Tab2',
        content: 'Content of Tab Pane 2',
        key: '2',
        component: require('../components/page2/page.jsx').default
    }, {
        title: 'Tab3',
        content: 'Content of Tab Pane 3',
        key: '3',
        component: require('../components/page3/page.jsx').default
    }
];

console.log(img)
const Render = (props) => {
    var newProps = {}
    Object.keys(props).forEach((key) => {
        key !== 'is' && (newProps[key] = props[key])
    })
    return <props.is {...newProps}/>
}

class Panle extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
        this.div = null
    }

    onChange = (activeKey) => {
        console.log('onChange')
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        console.log('onEdit')
        this[action](targetKey);
    }

    add = () => {
        console.log('add')
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane' + this.newTabIndex, key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        console.log('remove')
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
    renderPanes = (panes) => {
        return (this.state.panes.map(pane =>
            <TabPane tab={pane.title} key={pane.key}>
                {/* {pane.content} */}
                {
                    <Render is={pane.component} parent={this} prem={this.div} />
                }
            </TabPane>
        ))
    }
    
    render() {
        return (

            <div ref={(div)=> this.div = div}>
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
                        this.renderPanes()
                    }
                </Tabs>
            </div>
        );
    }
}



export default Panle