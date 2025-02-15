import React, {Component} from 'react';
import PortfolioComponent from './PortfolioComponent';

import img1 from '../images/portfolio/01-thumbnail.jpg';
import img2 from '../images/portfolio/02-thumbnail.jpg';
import img3 from '../images/portfolio/03-thumbnail.jpg';
import img4 from '../images/portfolio/04-thumbnail.jpg';
import img5 from '../images/portfolio/05-thumbnail.jpg'
import img6 from '../images/portfolio/06-thumbnail.jpg';


const portfolio =[
{caption:'Threads',description:'Illustration',image:img1},
{caption:'Explore',description:'Graphic Design',image:img2},
{caption:'Finish',description:'Identity',image:img3},
{caption:'Lines',description:'Branding',image:img4},
{caption:'Southwest',description:'Website Design',image:img5},
{caption:'Window',description:'Photography',image:img6}
];

class Portfolio extends Component{
	render(){
	return(
		<section className="bg-light page-section" id="portfolio">
    	<div className="container">
	      <div className="row">
	        <div className="col-lg-12 text-center">
	          <h2 className="section-heading text-uppercase">Portfolio</h2>
	          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
	        </div>
	      </div>
	      <div className="row">
        	{
				      		portfolio.map((item,index) =>{
				      			return <PortfolioComponent
				      			{...item} key={index}
				      			/>
				      		})
				      	}
      		</div>
    	</div>
  		</section>
	);
	}
}

export default Portfolio;