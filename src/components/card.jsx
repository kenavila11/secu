import React, { Component } from 'react';
import '../assets/scss/card.scss';

class Card extends Component {
    state = {  }
    render() { 
        let image;
        //{minHeight: (this.props.align == "center") ? 57+"px" : 38+"px", marginBottom: 20 + "px"}
        if(this.props.img) {
            image = <div className="card-image d-inline-block" style={(this.props.align == "center") ? {minHeight: 57+"px", marginBottom: 20+"px"} : {minHeight: 38+"px", marginBottom: 10+"px"}}>
                        <img src={this.props.img} alt="" className={(this.props.align != "center") ? "mr-4" : ""}/>
                    </div>
        }
        return (
            <div className={`secu-card text-${this.props.align}`}>
                {image}
                <label htmlFor="" className={"dark-text " + ((this.props.align == "center") ? "d-block" : "") }>{this.props.title}</label>
                <p className="pale-text" dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </div>
        );
    }
}
 
export default Card;