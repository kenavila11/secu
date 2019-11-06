import React, { Component } from 'react';
import Footer from '../components/footer';
import TitleAndDesc from '../components/title-and-description';
import Card from '../components/card';
import Spacer from '../components/spacer';

class ContactUs extends Component {
    state = {  }

    render() { 
        return (
            <div className="secu-contactUs bg-cream">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <Spacer size="47" />
                            <img src={require("../assets/images/svg/wheel.svg")} className="mb-3" alt=""/>
                            <TitleAndDesc 
                                title="Need Help?"
                                description="Contact our Customer Support that is always ready to help you with any possible
                                questions, problems or information."
                                miniBorder
                            />
                            <Spacer size="45" />
                            <p className="contactUs-email dark-text" style={{"font-size": "18px"}}>support@secu.com</p>
                            <Spacer size="70" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default ContactUs;