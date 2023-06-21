import {useState} from 'react';
import Footer from '../Footer/Footer';
import styles from './Aside.module.scss';
import { Rating, Typography } from '@mui/material';
const Aside = () => {
  const [value, setValue] = useState(0);
	return (
		<div>
			<Footer />
			<section className={styles.asideWrapper}>
				<Typography component='legend'>Controlled</Typography>
				<Rating
					name='simple-controlled'
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
				<Typography component='legend'>Read only</Typography>
				<Rating name='read-only' value={value} readOnly />
				<Typography component='legend'>Disabled</Typography>
				<Rating name='disabled' value={value} disabled />
				<Typography component='legend'>No rating given</Typography>
				<Rating name='no-value' value={null} />
			</section>
		</div>
	);
};

export default Aside;
