import React, { Component } from 'react';
import Card from '../components/card';

class NewsLetterForm extends Component {
    state = {  }
    render() { 
        return (
            <div className="secu-newsLetterForm">
                <Card 
                    title="Stay up to date with SEC-U"
                    description="Subscribe to our newsletter for the latest news and updates straight to your inbox"
                />
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-success btn-md btn-block">Subscribe Now</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default NewsLetterForm;