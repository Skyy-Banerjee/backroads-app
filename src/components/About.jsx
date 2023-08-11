import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
	return (
		<div>
			<section className="section" id="about">
				<Title title="about" subTitle="us" />
				<div className="section-center about-center">
					<div className="about-img">
						<img src={aboutImg} className="about-photo" alt="awesome beach" />
					</div>
					<article className="about-info">
						<h3>explore the difference</h3>
						<p>
							Discover new horizons with Backroads app. Seamlessly book unique
							journeys worldwide. Tailored itineraries, local insights, and
							unforgettable adventures await
						</p>
						<p>
							Backroads app redefines travel booking. Access a global network of
							curated tours, personalized recommendations, and expert guides for
							authentic experiences everywhere.
						</p>
						<a href="#" className="btn">
							read more
						</a>
					</article>
				</div>
			</section>
		</div>
	);
};

export default About;
