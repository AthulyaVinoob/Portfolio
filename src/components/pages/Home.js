import React,{Component} from 'react';
import Header from '../common/Header';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Team from '../common/Team';
import Client from '../common/Client';
import AboutComponent from '../common/AboutComponent';
import Contact from './Contact';
import image from '../images/header-bg.jpg';
class Home extends Component{

	render(){
		return(
			<div>
				 <Header
				 title="Welcome to Our Studio!"
				 subtitle="IT'S NICE TO MEET YOU"
				 buttonText="Tell me more"
				 showButton={true}
				 link='/services'
				 image={image}
				 /> 
				 <Services/>
				 <Portfolio/>
				 <AboutComponent/>
				 <Team/>
				 <Client/>
				 <Contact/>
			</div>
		);
	}
}

export default Home;