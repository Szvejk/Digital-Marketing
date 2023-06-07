import React from 'react';
import styles from './Team.module.scss';
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';
import team4 from '../img/team4.jpg';
import team5 from '../img/team5.jpg';
import team6 from '../img/team6.jpg';
import team7 from '../img/team7.jpg';
import team8 from '../img/team8.jpg';

const Team = () => {
	return (
		<>
			<section className={styles.flexTeam}>
				<div className={styles.titleTeam}>
					<h4> OUR CREATIVE TEAM</h4>
					<h1 className={styles.meetUs}>
						Meet the Dedicated Professionals with Creative Vision
					</h1>
				</div>

				<div className={styles.grid}>
					<div className={styles.wrapper}>
						{' '}
						<img src={team1} className={styles.photo} />{' '}
						<span className={styles.name}>Naren </span>{' '}
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team2} className={styles.photo} />
						<span className={styles.name}>Sasi Ram</span>
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team3} className={styles.photo} />
						<span className={styles.name}>Thirumurugan</span>
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team4} className={styles.photo} />
						<span className={styles.name}>Vishnu Priya</span>
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team5} className={styles.photo} />
						<span className={styles.name}>Arun Raj</span>
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team6} className={styles.photo} />
						<span className={styles.name}>Deva Dharshini</span>
					</div>
					<div className={styles.wrapper}> 
						{' '}
						<img src={team7} className={styles.photo} />
						<span className={styles.name}>Hammad Thahir</span>
					</div>
					<div className={styles.wrapper}>
						{' '}
						<img src={team8} className={styles.photo} />
						<span className={styles.name}>Hussain Khan</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
