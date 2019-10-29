import React, { Component } from 'react';
import '../assets/scss/titleAndDescription.scss';

class TitleAndDesc extends Component {
    state = {  }
    render() { 
        return (
            <div className={`secu-titleAndDesc text-${this.props.align}`}>
                <h2 className={`dark-text ${ (this.props.miniBorder) ? "mini-border" : "" }`}>{this.props.title}</h2>
                <p className="pale-text">{this.props.description}</p>
            </div>
        );
    }
}
 
export default TitleAndDesc;