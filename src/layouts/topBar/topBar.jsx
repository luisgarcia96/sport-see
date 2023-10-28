import React from "react";

import logo from "../../assets/logos/logo-sport-see.svg";

import styles from "./TopBar.module.scss";

const TopBar = () => {
	return (
		<div className={styles.topbar}>
			<a href="/" className={styles.logoContainer}>
				<img src={logo} alt="Logo" className={styles.logo} />
			</a>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<a href="#">Accueil</a>
					</li>
					<li className={styles.navItem}>
						<a href="#">Profil</a>
					</li>
					<li className={styles.navItem}>
						<a href="#">Réglages</a>
					</li>
					<li className={styles.navItem}>
						<a href="#">Communauté</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TopBar;
