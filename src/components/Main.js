require('normalize.css/normalize.css');
require('styles/App.css');
import Components from '../pages/Components/index.js'
import React from 'react';
import { Router, Route, hashHistory} from 'react-router'


class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <Router history={hashHistory}>
                <Route path="/components"/>
                <Route path="/" component={Components} />
            </Router>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
