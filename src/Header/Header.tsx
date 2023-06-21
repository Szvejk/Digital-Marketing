import { useState } from 'react';
import styles from './Header.module.scss';
import banner from '../img/banner.png';
import waves from '../img/waves (2).svg';
import { AiOutlineComment } from 'react-icons/ai';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Serviceoffer from '../ServiceOffer/Serviceoffer';
const Header = () => {
	const [open, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};

	return (
		<>
			<section className={styles.header}>
				{' '}
				<div className={styles.heart}>
					<FcLike onClick={() => setIsOpen((prev) => !prev)} />
				</div>
				<div className={styles.menuContact}>
					{!open && (
						<>
							{' '}
							<div className={styles.wrapperLi}>
								<span className={styles.headerLinkMessage}>
									<li className={styles.iconMessage}>
										<AiOutlineComment />{' '}
									</li>
									info@thecreatives360
								</span>
								<span className={styles.headerLinkTelephone}>
									<li className={styles.iconTelephone}>
										<BsTelephoneForwardFill />{' '}
									</li>
									+971 50 267 1236
								</span>
								<Link className={styles.headerLink} to='/'>
									Home
								</Link>
								<Link className={styles.headerLink} to='/services'>
									Service Offer
								</Link>
								<Link className={styles.headerLink} to='/society'>
									Society
								</Link>
								<Link className={styles.headerLink} to='/aside'>
									Kontakt
								</Link>
							</div>
						</>
					)}
				</div>
				<div className={styles.wrapperImg}>
					<img
						src={banner}
						className={styles.bannerImg}
						alt='people with pen'
					/>
				</div>
				<div className={styles.headerText}>
					<div className={styles.mainText}>
						EFFECTIVE DIGITAL CAMPAIGNS THAT DRIVE MORE SALES{' '}
					</div>
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
		</>
	);
};

export default Header;
