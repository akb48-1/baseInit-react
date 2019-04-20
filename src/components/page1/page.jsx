import React, { Component } from 'react';

class Page1 extends Component {
    componentDidMount = () => {
        console.log(this.props, 'componentDidMount')
    }
    componentWillMount = () => {
        console.log(this.props, 'componentWillMount')
    }
    render() {
        return (
            <div>
                page1
                <input type="text" />
            </div>
        );
    }
}

export default Page1;
