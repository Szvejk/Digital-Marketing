import React from 'react';
import styles from './Header.module.scss';
import banner from '../img/banner.png';
import waves from '../img/waves (2).svg';
import { AiOutlineComment } from 'react-icons/ai';
import { BsTelephoneForwardFill } from 'react-icons/bs';
const Header = () => {
	return (
		<section className={styles.header}>
			<div className={styles.menuContact}>
				<span className={styles.headerLink}>
					<span className={styles.iconMessage}>
						{' '}
						<AiOutlineComment />{' '}
					</span>
					info@thecreatives360.com
				</span>

				<span className={styles.headerLinkTelephone}>
					<span className={styles.iconTelephone}>
						<BsTelephoneForwardFill />{' '}
					</span>
					+971 50 267 1236
				</span>

				<span className={styles.headerLink}>Services</span>
				<span className={styles.headerLink}>Blog</span>
				<span className={styles.headerLink}>Contact us</span>
			</div>

			<div className={styles.wrapperImg}>
				<img src={banner} className={styles.bannerImg} alt='people with pen' />
			</div>
			<div className={styles.headerText}>
				<span className={styles.mainText}>
					EFFECTIVE DIGITAL CAMPAIGNS THAT DRIVE MORE SALES{' '}
				</span>
				<p className={styles.smallerTextHeader}>
					WEBSITE DEVELOPMENT | APP DEVELOPMENT | BRANDING | SOCIAL MEDIA
					MARKETING | SEO | GOOGLE ADs | AMAZON & NOON PRODUCT LISTING
				</p>
				<button className={styles.consultationBtn}>
					<h4> Request a free consultation </h4>
				</button>
			</div>

			<div className={styles.dot}></div>
			<div className={styles.square}></div>

			<img src={waves} className={styles.wave} alt='' />
		</section>
	);
};

export default Header;
