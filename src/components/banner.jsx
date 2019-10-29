import React, { Component } from 'react';
import '../assets/scss/banner.scss'

class Banner extends Component {
    state = {
        styles: {
            backgroundImage: `url(${this.props.img})`,
            height: this.props.height + "vh",
        }
    }

    render() { 
        let button;
        let desc;

        if(!this.props.disableButton) {
            button = <div className="bc-button">
                <a href={this.props.buttonLink} className="btn btn-success">{this.props.buttonText}</a>
            </div>
        }

        if(this.props.description) {
            desc = <div className="bc-description">
                <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </div>
        }

        return (
            <div className="secu-banner" style={this.state.styles}>
                <div className="banner-overlay" style={{backgroundColor: `rgba(45, 110, 112, ${this.props.overlayOpacity})`}}></div>
                <div className="banner-content justify-content-vertical-center">
                    <div className={`banner-content-inner container text-${this.props.contentAlign}`}>
                        <div className="bc-title">
                            <h1 
                                className="font-weight-bold" 
                                dangerouslySetInnerHTML={{__html: this.props.title}}
                                style={(this.props.description) ? {marginBottom: 24 + "px"} : {}}
                            ></h1>
                        </div>
                        {desc}
                        {button}
                    </div>
                </div>
                {/* <img src={this.props.img} className="w-100" alt=""/> */}
            </div>
        );
    }
}
 
export default Banner;