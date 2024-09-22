import styles from './WhoWeHelp.module.scss';
import WhoWeHelpImage from '../../../assets/pngs/Designer.png';

const WhoWeHelp = ()=>{
    return (
		<div className={styles.container}>
			<h1>Who we Assist</h1>
			<div className={styles.innerContainer}>
				<img src={WhoWeHelpImage} alt="logo" width={500} />
				<section>
					<p>
						Empowering business travelers and tourists with seamless, reliable rides.
                         Whether you’re heading to a meeting or exploring new destinations, 
                        our service ensures comfort and convenience. 
                        Trust us to connect you with your journey, effortlessly
					</p>
				</section>
			</div>
		</div>
	);
}

export default WhoWeHelp;