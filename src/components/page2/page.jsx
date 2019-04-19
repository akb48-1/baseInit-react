import React, { Component } from 'react';

class Page2 extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        a: 'a'
    };
    render() {
        var value = 123
        console.log(this.state, 'state')
        return (
            <div>
                page2
                {
                    this.state.a
                }
                <input type="text" defaultValue={value}/>
            </div>
        );
    }
}

export default Page2;
