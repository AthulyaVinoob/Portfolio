import React from 'react';

//Navigation
import Navigation from './components/Navigation'
import AdminNavigation from './components/AdminNavigation'
//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';


import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  return (
  	<Router>

    <Route
        path="/admin"
        render ={(props) =>(
            <AdminNavigation>
            <Login />
            </AdminNavigation>
        )}
    />
    		<Route
    		exact={true}
    		path="/"
    		render= {(props) =>(
                <Navigation>
                <Home {...props} />
                </Navigation>
            )}
    		/>
    		<Route
    		path="/about"
    		render= {(props) =>(
                <Navigation>
                <About {...props} />
                </Navigation>
            )}
    		/>
            <Route
            path="/contact"
            render= {(props) =>(
                <Navigation>
                <Contact {...props} />
                </Navigation>
            )}
            />
    </Router>
  );
}

export default App;
