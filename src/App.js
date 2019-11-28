import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';

//Navigation
import Navigation from './components/Navigation';
import AdminNavigation from './components/AdminNavigation';
import LoginNavigation from './components/LoginNavigation';
//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Admin/Dashboard';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';

class App extends Component {
    render(){
          return (
    <Router>
    <Route 
    path ="/admin/users"
    render={(props) => {
            return (
                <div>
                {this.props.auth.token ?
                  <AdminNavigation>
                    <Users />
                  </AdminNavigation>
                : 
                  <LoginNavigation>
                    <Login />
                  </LoginNavigation>
                  
                }
                </div>
              
            )
          }}
    />
    <Route 
    path ="/admin/posts"
    render={(props) => {
            return (
                <div>
                {this.props.auth.token ?
                  <AdminNavigation>
                    <Posts />
                  </AdminNavigation>
                : 
                  <LoginNavigation>
                    <Login />
                  </LoginNavigation>
                  
                }
                </div>
              
            )
          }}
    />

    <Route
        exact ={true}
          path="/admin"
          render={(props) => {
            return (
                <div>
                {this.props.auth.token ?
                  <AdminNavigation>
                    <Dashboard />
                  </AdminNavigation>
                : 
                  <LoginNavigation>
                    <Login />
                  </LoginNavigation>
                  
                }
                </div>
              
            )
          }}
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
}


const mapStateToProps =state =>{
    return {
        auth :state.auth
    }
}

const mapDispatchToProps =dispatch =>{
    return {
        
    }
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(App);
