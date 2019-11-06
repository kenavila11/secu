import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../components/banner';
import TitleAndDesc from '../components/title-and-description';
import Card from '../components/card';
import Spacer from '../components/spacer';
import NewsLetterForm from '../components/newsletter-form';

class HomePage extends Component {
    state = {
        Banner: {
            Image: require('../assets/images/home-banner.png'),
            Title: "Availability for Any App, Any <br/>Data, Across Any Cloud",
            Description: "Built on a foundation of continuous data protection, Sec-U converges <br/>disaster recovery and backup. Built-in orchestration <br/>and automation provide you one simple, agile solution to save time, <br/>resources and costs.",
            Height: "100", //percentage,
            ButtonText: "WATCH NOW",
            ButtonLink: "#",
            OverlayOpacity: 0.9
        },
        Content: {
            Section1: {
                Title: "Sec-U Protects Your Business Data and Applications",
                Description: "Backup & Replication offers an integrated approach to data protection, ensuring that your critical data and applications are safe.",
                Align: "center" //right, left
            },
            Section2: {
                Cards: [
                    { 
                        Image: require('../assets/images/svg/monitoring.svg'),
                        Title: "Monitoring & Analytics",
                        Description: "Visibility for any data, any app and across any cloud for business stakeholders.",
                        Align: "center" //right, left
                    },
                    { 
                        Image: require('../assets/images/svg/solution.svg'),
                        Title: "A Single Solution",
                        Description: "Meets your needs today and for the future with a platform for all OPEX models and for all workloads",
                        Align: "center" //right, left
                    },
                    { 
                        Image: require('../assets/images/svg/standardization.svg'),
                        Title: "IT Simplification and Standardization",
                        Description: "Reduce administrative overhead and labor cost of all workloads, including database backup and the same set of tools and processes",
                        Align: "center" //right, left
                    }
                ]
            },
            Section3: {
                Cards: [
                    { 
                        Image: require('../assets/images/svg/agility.svg'),
                        Title: "Agility",
                        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
                        Align: "left" //right, left
                    },
                    { 
                        Image: require('../assets/images/svg/saving.svg'),
                        Title: "Cost Saving",
                        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
                        Align: "left" //right, left
                    },
                    { 
                        Image: require('../assets/images/svg/acceleration.svg'),
                        Title: "Business Acceleration",
                        Description: "Improve operations by testing upgrades and security vulnerability, executing DevOps/DevTest and mining data for business insights",
                        Align: "left" //right, left
                    },
                    { 
                        Image: require('../assets/images/svg/reduction.svg'),
                        Title: "Portfolio Reduction",
                        Description: "Reduces the need for separate monitoring tools and provides disaster recovery and orchestration solutions as a part of our platform",
                        Align: "left" //right, left
                    },
                ]
            },
            Section4: {
                Title: "Built with High Attention to Details",
                Description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.",
                Image: require('../assets/images/map.png')
            },
        }
    }
    render() { 
        return (
            <div className="secu-homepage">
                <Banner 
                    img={this.state.Banner.Image}
                    height={this.state.Banner.Height}
                    title={this.state.Banner.Title}
                    description={this.state.Banner.Description}
                    buttonText={this.state.Banner.ButtonText}
                    buttonLink={this.state.Banner.ButtonLink}
                    overlayOpacity={this.state.Banner.OverlayOpacity}
                />
                <div className="container">
                    <Spacer size="80"/>
                    <div className="row">
                        <div className="col">
                            <TitleAndDesc
                                title={this.state.Content.Section1.Title}
                                description={this.state.Content.Section1.Description}
                                align={this.state.Content.Section1.Align}
                                miniBorder
                            />
                        </div>
                    </div>
                    {/* <Spacer size="55"/>
                    <div className="row">
                        { this.state.Content.Section2.Cards.map((card, i) => 
                            <div key={i} className="col-md-4">
                                <Card
                                    img={card.Image}
                                    title={card.Title}
                                    description={card.Description}
                                    align={card.Align}
                                />
                            </div>
                        )}
                    </div>
                    <Spacer size="30"/> */}
                    {/* <div className="row">
                        <div className="col text-center">
                            <img src={require("../assets/images/svg/reversedTSign.svg")} alt=""/>
                        </div>
                    </div>
                    <Spacer size="50"/>
                    <div className="row">
                        { this.state.Content.Section3.Cards.map((card, i) => 
                            <div key={i} className="col-md-6">
                                <Card
                                    img={card.Image}
                                    title={card.Title}
                                    description={card.Description}
                                    align={card.Align}
                                />
                                <Spacer size="59"/>
                            </div>
                        )}
                    </div> */}
                </div>
                <Spacer size="80"/>
                <div className="section4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 d-flex align-items-center">
                                {/* <div className="justify-content-vertical-center">
                                    <Card
                                        title={this.state.Content.Section4.Title}
                                        description={this.state.Content.Section4.Description}
                                        />
                                </div> */}
                                <NewsLetterForm />
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <img className="w-100" src={this.state.Content.Section4.Image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HomePage;