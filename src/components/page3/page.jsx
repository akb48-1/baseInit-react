import React, { Component } from 'react';

class Page3 extends Component {
    componentWillMount = () => {
        console.log(this.props)
    }
    render() {
        
        return (
            <div>
                page3
                <input type="text" />
            </div>
        );
    }
}

export default Page3;
