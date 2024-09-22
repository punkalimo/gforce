import styles from './Input.module.scss';


const Input = ({ placeholder, onChange, className }) => {
	return (
		<div className={styles.container}>
			<input type="text" placeholder={placeholder} onChange={onChange} className={`${className}`} />
		</div>
	);
};

export default Input;