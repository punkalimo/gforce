import styles from './Card.module.scss';



const Card = ({ text, bgColor }) => {
	return (
		<div className={styles.container} style={{ background: `${bgColor}` }}>
			<h4>{text}</h4>
		</div>
	);
};

export default Card;