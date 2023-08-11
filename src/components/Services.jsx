import React from 'react';
import Title from './Title';
import { servicesData } from '../data';

function Services() {
	return (
		<div>
			<section className="section services" id="services">
				<Title title="our" subTitle="services" />
				<div className="section-center services-center">
					{servicesData.map((serviceData) => {
						return (
							<article className="service" key={serviceData.id}>
								<span className="service-icon">
									<i className={`fas fa-${serviceData.iconText} fa-fw`}></i>
								</span>
								<div className="service-info">
									<h4 className="service-title">{serviceData.title}</h4>
									<p className="service-text">
										{serviceData.body}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Services;
