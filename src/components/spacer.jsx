import React, { Component } from 'react';

class Spacer extends Component {
    state = {  }
    render() { 
        return (
            <div className="secu-spacer" style={{marginTop: `${this.props.size}px`}}></div>
        );
    }
}
 
export default Spacer;