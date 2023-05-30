import React from 'react';
import styles from './Recognition.module.scss';
import seo from '../img/seo.svg';
import top from '../img/top.png';
import smallTop from '../img/smallTop.svg';

const Recognition = () => {
	return (
		<div className={styles.background}>
			<h2 className={styles.recognitionsHeader}>Our Recognitions</h2>
			<div className={styles.photos}>
				<img src={seo} className={styles.photo1} alt='' />
				<img src={top} className={styles.photo2} alt='' />
				<img src={smallTop} className={styles.photo3} alt='' />
			</div>
		</div>
	);
};

export default Recognition;
