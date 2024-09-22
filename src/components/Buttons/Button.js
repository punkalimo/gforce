import styles from './Button.module.scss';

function Button({ name, className, onClick }) {
	return (
		<button onClick={onClick} className={` ${styles.container} ${className}`}>
			{name}
		</button>
	);
}

export default Button;