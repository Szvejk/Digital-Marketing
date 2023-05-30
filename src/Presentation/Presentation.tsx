import React from 'react';
import styles from './Presentation.module.scss';
import { SiXstate, SiAirbnb, SiAlgorand } from 'react-icons/si';
const Presentation = () => {
	return (
		<section className={styles.wrapperPresentation}>
			<div className={styles.textPresentation}>
				<h3 className={styles.welcomeText}>Welcome to The Creatives 360°</h3>
				<h2 className={styles.describeText}>
					The Best Digital Marketing Agency in Dubai, UAE
				</h2>{' '}
			</div>
			<section className={styles.sides}>
				<div className={styles.leftSidePresentation}>
					<h1 className={styles.degrees}>
						{' '}
						360° of Digital Services Expertise{' '}
					</h1>
					<p className={styles.describeDegrees}>
						From corporate identity to website development and digital
						campaigns, we help brands dazzle their audience and grow their
						bottom line with visible results.{' '}
					</p>
				</div>

				<div className={styles.rightSidePresentation}>
					<div className={styles.wrapper}>
						{' '}
						<span className={styles.iconPresentation}>
							<SiAlgorand />
						</span>{' '}
						On Time Delivery
					</div>
					<div className={styles.wrapper}>
						<span className={styles.iconPresentation}>
							<SiAirbnb />
						</span>{' '}
						Our Expert Professionals
					</div>
					<div className={styles.wrapper}>
						<span className={styles.iconPresentation}>
							<SiXstate />
						</span>{' '}
						Complete Technical Support
					</div>
				</div>
			</section>
		</section>
	);
};

export default Presentation;
