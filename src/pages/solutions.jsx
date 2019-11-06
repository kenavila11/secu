import React, { Component } from 'react';
import Footer from '../components/footer';
import TitleAndDesc from '../components/title-and-description';
import Card from '../components/card';
import Spacer from '../components/spacer';
import Equalizer from 'react-equalizer';

class Solutions extends Component {
    state = {  }

    getNodes(equalizerComponent, equalizerElement) {
        return [
          this.refs.node1,
          this.refs.node2,
          this.refs.node3
        ]
    }

    render() { 
        return (
            <div className="secu-solutions bg-cream">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <Spacer size="47" />
                            <TitleAndDesc 
                                title="Comprehensive security coverage"
                            />
                            <Spacer size="55" />
                        </div>
                    </div>
                    <Equalizer className="row" nodes={this.getNodes.bind(this)}>
                        <div className="col-md-4">
                            <div className="mb-4" ref="node1">
                                <Card 
                                    title="Beyond CVE/NVD"
                                    description="The SEC-U database goes far beyond CVE vulnerabilities and includes many additional non-CVE vulnerabilities that are derived from several sources"
                                />
                            </div>
                            <TitleAndDesc 
                                title="67 %"
                                description="more vulnerabilities than NVD (public database)"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="mb-4" ref="node2">
                                <Card 
                                    title="Best coverage in the market"
                                    description="SEC-U regularly wins head to head comparisons to other vendors and finds many more vulnerabilities not detected by others"
                                />
                            </div>
                            <TitleAndDesc 
                                title="280 %"
                                description="better database coverage compared to other vendors"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="mb-4" ref="node3">
                                <Card 
                                    title="First to know & publish"
                                    description="SEC-U exposes many vulnerabilities before they are added to public databases. On Average, SEC-U publishes vulnerabilities 92 days sooner than NPM Audit."
                                />
                            </div>
                            <TitleAndDesc 
                                title="72 %"
                                description="of the vulnerabilities in npm audit were added first to the SEC-U database"
                            />
                        </div>
                    </Equalizer>
                    <Spacer size="70"/>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Solutions;