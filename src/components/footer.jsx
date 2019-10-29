import React, { Component } from 'react';
import Card from './card';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="secu-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="justify-content-vertical-center">
                                <Card
                                    title="Do You Like Sec-U Download it Now"
                                    description="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="justify-content-vertical-center">
                                <a href="#" className="btn btn-md btn-success left-auto">CREATE FREE ACCOUNT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;