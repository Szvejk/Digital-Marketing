import React from 'react';
import styles from './Serviceoffer.module.scss';
const Serviceoffer = () => {
	return (
		<section className={styles.wrapperOffer}>
			<h2 className={styles.servicesTitle}>OUR WAY TO SUCCESS</h2>
			<div className={styles.wrapperServices}>
				<div className={styles.service1}>
					<h5 className={styles.titleOfService}>Website Development</h5>
					<p className={styles.descriptionService}>
						We offer the best custom web development in Dubai. Our professional
						web designers can develop creative & eye-catchy designs.
					</p>
				</div>
				<div className={styles.service2}>
					<h5 className={styles.titleOfService}>Social Media Marketing</h5>
					<p className={styles.descriptionService}>
						Making content material which you have customized to the setting of
						each online media.
					</p>
				</div>
				<div className={styles.service3}>
					<h5 className={styles.titleOfService}>Branding</h5>
					<p className={styles.descriptionService}>
						The investigation of quantifiable and quantifiable information of
						your site with the point.
					</p>
				</div>
				<div className={styles.service4}>
					<h5 className={styles.titleOfService}>SEO</h5>
					<p className={styles.descriptionService}>
						The act of expanding the amount and nature of traffic to your site
						through natural web crawler.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Serviceoffer;
