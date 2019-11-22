import React from 'react';

//Navigation
import Navigation from './components/Navigation'

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  return (
  	<Router>
    <Navigation>
    		<Route
    		exact={true}
    		path="/"
    		component={Home}
    		/>
    		<Route
    		path="/about"
    		component={About}
    		/>
            <Route
            path="/contact"
            component={Contact}
            />
    </Navigation>
    </Router>
  );
}

export default App;
