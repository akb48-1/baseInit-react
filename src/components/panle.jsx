import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import img from '../logo.svg';
import Loadable from 'react-loadable';
import { panes } from '../util/map';
import axios from 'axios';

const TabPane = Tabs.TabPane;


console.log(img)
class Render extends Component {
    constructor(props) {
        super(props);
        this.state = {
            El : () => ''
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    async componentWillMount() {
        console.log('componentWillMount')
        var El = await this.props.component
        this.setState({
            El: El.default
        })
    }
    render() {
        console.log('render')
        var { props } = this
        var { El } = this.state
        var newProps = {}
        Object.keys(props).forEach((key) => {
            key !== 'component' && (newProps[key] = props[key])
        })
        return <El {...newProps} />
    }
}

class Panle extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        this.state = {
            activeKey: panes[0].keyName,
            panes,
        };
        this.div = null
    }

    onChange = (activeKey) => {
        console.log('onChange')
        this.setState({ activeKey });
    }

    onEdi = (targetKey, action) => {
        console.log('onEdit')
        console.log(targetKey, action)
        this[action](targetKey);
    }

    add = () => {
        console.log('add')
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes[panes.length] = {
            title: 'Tab3',
            keyName: activeKey,
            component: import('../components/page3/page.jsx')
        }
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
        const panes = this.state.panes.filter(pane => pane.keyName !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].keyName;
            } else {
                activeKey = panes[0].keyName;
            }
        }
        this.setState({ panes, activeKey });
    }
    // renderPanes() {
    //     return (this.state.panes.map(pane =>
    //         <TabPane tab={pane.title} key={pane.keyName} closable={pane.closable}>
    //             {
    //                 <Render {...pane} parent={this} prem={this.div} />
    //             }
    //         </TabPane>
    //     ))
    // }
    
    render() {
        return (

            <div ref={(div)=> this.div = div}>
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.add}>ADD</Button>
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {
                        renderPanes(this)
                    }
                </Tabs>
            </div>
        );
    }
}

const renderPanes = (that) => {
    return (that.state.panes.map(pane =>
        <TabPane tab={pane.title} key={pane.keyName} closable={pane.closable}>
            {
                <Render {...pane} parent={that} />
            }
        </TabPane>
    ))
}

export default Panle