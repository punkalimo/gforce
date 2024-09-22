import React from 'react';
import logo from '../../assets/Design 2.png';
import styles from './Footer.module.scss';
import twitterLogo from '../../assets/svgs/icons/twitter_icon.svg';
import facebookLogo from '../../assets/svgs/icons/facebook_icon.svg';
import youtubeLogo from '../../assets/svgs/icons/youtube_icon.svg';
const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<section>
					<img src={logo} alt="logo" width={260} />
				</section>
				<section>
					<h5>Follow Us</h5>
					<div className={styles.imageContainer}>
						<img className={styles.image} src={facebookLogo} alt="facebook-logo" />
						<img className={styles.image} src={twitterLogo} alt="twitter-logo" />
						<img className={styles.image} src={youtubeLogo} alt="youtube-logo" />
					</div>
					<h5>Contact Us</h5>
					<p>bookings@gforce.co.zm</p>
				</section>
				<section>
					<h5>Customer Care</h5>
					<p>Maintenance</p>
				</section>
			</div>
			<h2>Copyright © 2024 G-force Vehicle Booking.</h2>
		</div>
	);
};

export default Footer;