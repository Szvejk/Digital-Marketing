import React from 'react';
import styles from './Team.module.scss';
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg'; 
import team3 from '../img/team3.jpg';
import team4 from '../img/team4.jpg';
import team5 from '../img/team5.jpg';
import team6 from '../img/team6.jpg';
import team7 from '../img/team7.jpg'
import team8 from '../img/team8.jpg';

type SingleMember = {
	img: string;
	name:string;
	id: number;
}

const member: SingleMember[] = [
	{
		id:1,
		img: '../img/team1.jpg',
		name: 'Naren'
	}, {
		id:2,
		img:'../img/team2.jpg',
		name: 'Sasi Ram'
	},{
		id:3,
		img:'../img/team3.jpg',
		name: 'Thirumurugan'
	},{
		id:4,
		img:'../img/team4.jpg',
		name: 'Thirumurugan'
	},{
		id:5,
		img:'../img/team5.jpg',
		name: 'Thirumurugan'
	},{
		id:6,
		img:'../img/team6.jpg',
		name: 'Deva Dharshini'
	},{
		id:7,
		img:'../img/team7.jpg',
		name: 'Hammad Thahir'
	},{
		id:8,
		img:'../img/team8.jpg',
		name: 'Hussain Khan'
	}

]

const Team = (member:SingleMember) => {

	return (
	

<section key={styles.flexTeam}>
				<div className={styles.titleTeam}>
					<h4> OUR CREATIVE TEAM</h4>
					<h1 className={styles.meetUs}>
						Meet the Dedicated Professionals with Creative Vision
					</h1>
				</div>
	{member.map((el) => {
		return(
			<div key={member.id}>
				<div className={styles.wrapper}>
				<img src={member.img} className = {styles.photo} alt="" />
				<span>{member.name}</span>
					</div></div>
		)

	})}

</section>


					// <div className={styles.wrapper}>
					// 	{' '}
					// 	<img src={team6} className={styles.photo} />
					// 	<span className={styles.name}>Deva Dharshini</span>
					// </div>
					// <div className={styles.wrapper}> 
					// 	{' '}
					// 	<img src={team7} className={styles.photo} />
					// 	<span className={styles.name}>Hammad Thahir</span>
					// </div>
					// <div className={styles.wrapper}>
					// 	{' '}
					// 	<img src={team8} className={styles.photo} />
					// 	<span className={styles.name}>Hussain Khan</span>
					// </div>
			
			
		
	);
};

export default Team;
