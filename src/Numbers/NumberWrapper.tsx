import React from 'react';
import { CountAnimation } from './Numbers';
import styles from './Numbers.module.scss';

const boxes = [
	{
		id: 1,

		endCount: 25,
		text: 'ONGOING PROJECTS',
	},
	{
		id: 2,

		endCount: 55,
		text: 'COMPLETED PROJECTS',
	},
	{
		id: 3,

		endCount: 10,
		text: 'YEARS OF EXPERIENCE',
	},

	{
		id: 4,
		endCount: 6,
		text: 'Team Members',
	},
];

const NumberWrapper = () => {
	let interval = 5000;

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.numbersTitle}>
				{' '}
				Best Digital Marketing Services for your business
			</h1>
			<div className={styles.elementsWrapper}>
				{boxes.map((el) => {
					return (
						<div key={el.id}>
							<div className={styles.numbers}>
								<CountAnimation duration={3000} endCount={el.endCount} />{' '}
								<span className={styles.plus}>+ </span>{' '}
							</div>
							<span className={styles.text}>{el.text}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NumberWrapper;
