import React, { Component } from 'react';
import Footer from '../components/footer';
import Banner from '../components/banner';
import TitleAndDesc from '../components/title-and-description';
import Card from '../components/card';
import Spacer from '../components/spacer';

class CreateFreeAccount extends Component {
    state = {
        Banner: {
            Image: require('../assets/images/registration-banner.png'),
            Title: "Registration",
            Height: "55", //percentage
            ContentAlign: "center",
            OverlayOpacity: 0.7
        },
        Content: {
            Title: "Create your Sec-U Account",
            Cards: [
                {
                    Title: "Product Downloads",
                    Description: "Download any Veeam Products: paid and free"
                },
                {
                    Title: "Account Management",
                    Description: "Manage your license keys and subscriptions"
                },
                {
                    Title: "Support",
                    Description: 'Create support tickets, request "one click update"'
                },
            ]
        }
    }
    render() { 
        return (
            <div className="secu-createFreeAccount">
                <Banner 
                    img={this.state.Banner.Image}
                    height={this.state.Banner.Height}
                    title={this.state.Banner.Title}
                    description={this.state.Banner.Description}
                    contentAlign={this.state.Banner.ContentAlign}
                    overlayOpacity={this.state.Banner.OverlayOpacity}
                    disableButton
                />
                <div className="createFreeAccount-content">
                    <div className="container">
                        <Spacer size="70"/>
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                                <TitleAndDesc 
                                    title={this.state.Content.Title}
                                />
                                {/* {this.state.Content.Cards.map((card, i) => 
                                    <Card 
                                        key={i}
                                        title={card.Title}
                                        description={card.Description}
                                        />
                                        )} */}
                            </div>
                            <div className="col-md-6">
                                <form action="">
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <label htmlFor="" className="col-form-label pale-text">Full Name</label>
                                            <input type="text" className="form-control" placeholder="First Name"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="" className="col-form-label pale-text">&nbsp;</label>
                                            <input type="text" className="form-control" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <label htmlFor="" className="col-form-label pale-text">Phone</label>
                                            <input type="text" className="form-control" placeholder="63"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <label htmlFor="" className="col-form-label pale-text">Business Email</label>
                                            <input type="text" className="form-control" placeholder="Business Email"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <label htmlFor="" className="col-form-label pale-text">Company</label>
                                            <input type="text" className="form-control" placeholder="Company"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <label htmlFor="" className="col-form-label pale-text">Company Profile</label>
                                            <input type="text" className="form-control" placeholder="Select Profile"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="" className="col-form-label pale-text">Industry</label>
                                            <input type="text" className="form-control" placeholder="Industry"/>
                                        </div>
                                    </div>


                                    <div className="form-group text-right">
                                        <p className="policy pale-text">By registering you agree to the <a href="#" className="pale-text font-weight-bold">Privacy Policy</a>.</p>
                                        <button className="btn btn-md btn-success">REGISTER</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <Spacer size="77"/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default CreateFreeAccount;