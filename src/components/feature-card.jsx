import React, { Component } from 'react';
import '../assets/scss/featureCard.scss'

class FeatureCard extends Component {
    state = {  }
    render() { 
        return (
            <div className="secu-featureCard">
                <label htmlFor="" className="d-block light-text text-uppercase">{this.props.title}</label>
                <h1 className="display-4 dark-text">{this.props.price}</h1>
                <p className="dark-text text-lowercase">/{this.props.per}</p>
                <a href="#" className="btn btn-md btn-secondary text-uppercase">{this.props.buttonText}</a>
            </div>
        );
    }
}
 
export default FeatureCard;