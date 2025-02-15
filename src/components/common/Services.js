import React, {Component} from'react';

import ServiceComponent from './ServiceComponent';

const services =[
{title:'E-Commerce',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-shopping-cart'},
{title:'Web Design',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-laptop'},
{title:'Security',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-lock'}
];

class Services extends Component {
	render(){
		return(
			<div>
				<section className="page-section" id="services">
				    <div className="container">
				      <div className="row">
				        <div className="col-lg-12 text-center">
				          <h2 className="section-heading text-uppercase">Services</h2>
				          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				        </div>
				      </div>
				      <div className="row text-center">
				      	{
				      		services.map((service,index) =>{
				      			return <ServiceComponent
				      			{...service} key={index}
				      			/>
				      		})
				      	}
				      </div>
				    </div>
				  </section>
			</div>
			);
	}
}

export default Services;