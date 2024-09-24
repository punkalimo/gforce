import styles from './Intro.module.scss';
import logo from '../../../assets/logo.jpeg';


const Intro = ()=>{
    return (
        <div className={styles.container}>
            <section className={styles.leftContainer}>
				<h1>Ride with Ease, Book with Confidence</h1>
				<p>
                At G-FORCE, we ensure a smooth, stress-free journey. Book with confidence,
                 knowing your safety and comfort are our top priorities. Ride with ease.
				</p>
				
			</section>
			<section className={styles.rightContainer}>
				<img src={logo} alt="logoImage" width={500} />
			</section>
        </div>
    );
}


export default Intro;