import React from 'react';
import styles from './Serviceoffer.module.scss';


type ServiceSingle = {
	id: number;
	title: string;
	text: string;
};

const service: ServiceSingle[] = [
	{
		id: 1,
		title: 'Social Media Marketing',
		text: ' Making content material which you have customized to the setting of each online media.',
	},
	{
		id: 2,
		title: 'Website Development',
		text: ' 	We offer the best custom web development in Dubai. Our professional web designers can develop creative & eye-catchy designs.',
	},
	{
		id: 3,
		title: 'Branding',
		text: ' The investigation of quantifiable and quantifiable information of your site with the point.',
	},
	{
		id: 4,
		title: 'SEO',
		text: 'The act of expanding the amount and nature of traffic to your site through natural web crawler.',
	},
];
const Serviceoffer = () => {
	return (
		<section className={styles.wrapperOffer}>
			<h2 className={styles.servicesTitle}>OUR WAY TO SUCCESS</h2>
			<div className={styles.wrapperServices}>
				{service.map((el) => {
					return ( <> 
						<div key={el.id}>
							<div className={styles.singleElement}>
								<h5 className={styles.titleOfService}> {el.title}</h5>
								<p className={styles.descriptionService}>{el.text}</p>
							</div>
						</div>
						
						</>
					);
				})}
			</div>
		</section>

	);
};


export default Serviceoffer;
