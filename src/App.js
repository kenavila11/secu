import React, { Component } from 'react';

import Header from './components/header';
import HomePage from './pages/homepage';
import Pricing from './pages/pricing';
import CreateFreeAccount from './pages/create-free-account';
import Solutions from './pages/solutions';
import Testing from './pages/testing';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: {
        links: [
          { text: "Home", route: "/", page: HomePage },
          { text: "Solutions", route: "/solutions", page: Solutions },
          { text: "Pricing", route: "/pricing", page: Pricing },
          { text: "Contact Us", route: "/#", page: Pricing },
          { text: "Create Free Account", route: "/create-free-account", page: CreateFreeAccount, customClass: "btn btn-sm btn-success btnCreateAccount" },
          { text: "TESTING", route: "/testing", page: Testing, visible: false },
        ]
      }
    }
  }

  // HELPER TO SORT LINKS FROM THE STATE BY ROUTE (DESCENDING)
  order(a, b) {
    return a.route < b.route ? 1 : (a.route > b.route ? -1 : 0);
  }
  
  render() { 
    let linksArr = this.state.header.links.filter(link => link.text === link.text);
    return (
      <Router>
        <Header links={this.state.header.links} />
          <Switch>
            { 
              // RETURNS THE 'HomePage'(or '/' route) AS THE LAST ITEM. TO MAKE ROUTER SWITCH WORK PROPERLY
              linksArr.sort(this.order).map((link, i) => {
                return <Route key={i} path={link.route}>
                        <link.page />
                      </Route>
              })
            }
          </Switch>
      </Router>
    );
  }
}

export default App;