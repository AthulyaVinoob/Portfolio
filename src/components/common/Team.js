import React,{Component} from 'react';
import TeamComponent from './TeamComponent';

import img1 from '../images/team/1.jpg';
import img2 from '../images/team/2.jpg';
import img3 from '../images/team/3.jpg';

const teams=[
{name:'Kay Garland',designation:'Lead Designer',image:img1},
{name:'Larry Parker',designation:'Lead Marketer',image:img2},
{name:'Diana Pertersen',designation:'Lead Developer',image:img3}
];
class Team extends Component{
	render(){
		return(
<section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
		{
			teams.map((info,index)=>{
				return <TeamComponent
				{...info} key={index}/>
			})
		}        
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
			);
	}
}

export default Team;