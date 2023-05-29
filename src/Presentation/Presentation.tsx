import React from 'react';
import styles from './Presentation.module.scss';

const Presentation = () => {
	return (
		<section className={styles.wrapperPresentation}>
			<div className={styles.textPresentation}>
				<h3 className={styles.welcomeText}>Welcome to The Creatives 360°</h3>
				<h2 className={styles.describeText}>
					The Best Digital Marketing Agency in Dubai, UAE
				</h2>{' '}
			</div>

			<div className={styles.leftSidePresentation}>
				<h1 className={styles.degrees}> 360° of Digital Services Expertise </h1>
				<p className={styles.describeDegrees}>
					From corporate identity to website development and digital campaigns,
					we help brands dazzle their audience and grow their bottom line with
					visible results.{' '}
				</p>
			</div>

			
		</section>
	);
};

export default Presentation;
