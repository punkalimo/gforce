import Card from './component/Card';
import styles from './WhyUs.module.scss';

const WhyUs = () => {
	return (
		<div className={styles.container}>
			<h1>Why choose us</h1>
			<div className={styles.cardContainer}>
				<Card
					text="Reliable rides, anytime, anywhere, with safety and comfort guaranteed"
					bgColor="#33334F"
				/>
				<Card
					text="Quick booking, 24/7 availability, competitive pricing, and eco-friendly options."
					bgColor="#5656C2"
				/>
				<Card
					text="User-friendly app, diverse fleet, personalized service, and top reviews."
					bgColor="#42427B"
				/>
			</div>
		</div>
	);
};

export default WhyUs;