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

type SingleMember = {
	img: string;
	name: string;
	id: number;
};

const member: SingleMember[] = [
	{
		id: 1,
		img: team1,
		name: 'Naren',
	},
	{
		id: 2,
		img: team2,
		name: 'Sasi Ram',
	},
	{
		id: 3,
		img: team3,
		name: 'Thirumurugan',
	},
	{
		id: 4,
		img: team4,
		name: 'Thirumurugan',
	},
	{
		id: 5,
		img: team5,
		name: 'Thirumurugan',
	},
	{
		id: 6,
		img: team6,
		name: 'Deva Dharshini',
	},
	{
		id: 7,
		img: team7,
		name: 'Hammad Thahir',
	},
	{
		id: 8,
		img: team8,
		name: 'Hussain Khan',
	},
];

const Team = () => {
	return (
		<>
			<div className={styles.titleTeam}>
				<h4> OUR CREATIVE TEAM</h4>
				<h1 className={styles.meetUs}>
					Meet the Dedicated Professionals with Creative Vision
				</h1>
			</div>
			<section className={styles.flexTeam}>
				<div className={styles.grid}>
					{member.map((el) => {
						return (
							<div key={el.id}>
								<div className={styles.wrapper}>
									<img src={el.img} className={styles.photo} alt='' />
									<span>{el.name}</span>
								</div>
							</div>
						);
					})}
				</div>
			</section>{' '}
		</>
	);
};

export default Team;
