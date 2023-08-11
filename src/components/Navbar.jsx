import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<img src={logo} className="nav-logo" alt="backroads" />
						<button type="button" className="nav-toggle" id="nav-toggle">
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className="nav-links" id="nav-links">
						{pageLinks.map((link) => {
							return (
								<li key={link.id} href={link.href} className="nav-link">
									{link.text}
								</li>
							);
						})}
					</ul>

					<ul className="nav-icons">
						{socialLinks.map((link) => {
							return (
								<li key={link.id}>
									<a
										href={`https://www.${link.href}.com`}
										target="_blank"
										rel="noreferrer"
										className="nav-icon"
									>
										<i className={`fab fa-${link.href}`}></i>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
