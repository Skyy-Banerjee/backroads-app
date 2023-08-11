import React from 'react';
import Title from './Title';
import { tours } from '../data';

function Tours() {
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" subTitle="tours" />

				<div className="section-center featured-center">
					{tours.map((tour) => {
						return (
							<article className="tour-card" key={tour.id}>
								<div className="tour-img-container">
									<img src={tour.img} className="tour-img" alt={tour.title} />
									<p className="tour-date">{tour.date}</p>
								</div>
								<div className="tour-info">
									<div className="tour-title">
										<h4>{tour.title}</h4>
									</div>
									<p>{tour.body}</p>

									<div className="tour-footer">
										<p>
											<span>
												<i className="fas fa-map"></i>
											</span>{' '}
											{tour.destination}
										</p>
										<p>{tour.duration} days</p>
										<p>from ${tour.price}</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Tours;
