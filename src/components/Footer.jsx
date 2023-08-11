import React from 'react';
import { pageLinks, socialLinks } from '../data';
const Footer = () => {
	return (
		<div>
			<footer className="section footer">
				<ul className="footer-links">
					{pageLinks.map((link) => {
						return (
							<li key={link.id}>
								<a href={link.href} className="footer-link">
									{link.text}
								</a>
							</li>
						);
					})}
				</ul>
				<ul className="footer-icons">
					{socialLinks.map((link) => {
						return (
							<a href={link.href} className="footer-icon" key={link.id}>
								<i className={`fab fa-${link.href}`}></i>
							</a>
						);
					})}
				</ul>
				<p className="copyright">
					copyright &copy; Backroads travel tours company
					<span id="date">{new Date().getFullYear()}</span> all rights reserved
				</p>
			</footer>
		</div>
	);
};

export default Footer;
