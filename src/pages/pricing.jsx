import React, { Component } from 'react';
import Footer from '../components/footer';
import Banner from '../components/banner';
import TitleAndDesc from '../components/title-and-description';
import Card from '../components/card';
import Spacer from '../components/spacer';
import FeatureCard from '../components/feature-card';

class Pricing extends Component {
    state = {
        Features: [
            {
                Title: "Basic",
                Price: "$69.9",
                Per: "Month",
                ButtonText: "Select Plan"
            },
            {
                Title: "Plus",
                Price: "$399",
                Per: "Month",
                ButtonText: "Select Plan"
            },
            {
                Title: "Premium",
                Price: "$699",
                Per: "Month",
                ButtonText: "Select Plan"
            },
        ]
    }
    render() { 
        return (
            <div className="secu-pricing bg-cream">
                <div className="container">
                    <div className="row features">
                        <div className="col text-center">
                            <Spacer size="47" />
                            <TitleAndDesc 
                                title="Download the Full-Featured Free Trial"
                            />
                            <Spacer size="55" />
                            {/* <TitleAndDesc 
                                description="Cras mattis consectetur purus sit amet fermentum."
                            />
                            <Spacer size="50" /> */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {this.state.Features.map((feature, i) =>
                            <div key={i} className="col-md-3 px-0">
                                <FeatureCard 
                                    title={feature.Title}
                                    price={feature.Price}
                                    per={feature.Per}
                                    buttonText={feature.ButtonText}
                                />
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <Spacer size="30" />
                            <TitleAndDesc 
                                description="Limited Time Offer. All plans are FREE 14 days!"
                            />
                            <Spacer size="60" />
                        </div>
                    </div>
                </div>
                {/* <div className="inclusions">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <TitleAndDesc
                                    title="Included With All Plans"
                                    align="center"
                                    miniBorder
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Card
                                    img={require('../assets/images/svg/check.svg')}
                                    title="Maecenas faucibus mollis interdum Cras justo"
                                    align="left"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
        );
    }
}
 
export default Pricing;