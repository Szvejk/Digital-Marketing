import React from 'react';
import styles from './Footer.module.scss';
import waveBottom from '../img/waveBottom.svg';
const Footer = () => {
	return (
		<div className={styles.wrapperFooter}>
		
				<img src={waveBottom} className={styles.imgWave} />
				<div className={styles.textBottom}>
					<article className={styles.firstDivWrapper}>
						<h3 className={styles.companyBottom}>The Creatives 360 Logo</h3>
						<p>
							We're the digital marketing agency that'll help you realise your
							potential, reimagine your customer experience and reinvent your
							future fast with our excellent team who are expert in creating
							brands, website development, SEO and social media marketing.
						</p>
					</article>

					<div className={styles.bottomServices}>
						<li>Website Development</li>
						<li>Website Maintenance</li>
						<li>ECommerce</li>
						<li>Branding</li>
						<li>Social Media Marketing</li>
						<li>SEO</li>
						<li>Photography and Videography</li>
					</div>
			
			</div>
		</div>
	);
};

export default Footer;
