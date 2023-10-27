import React from "react";

import styles from "./SideBar.module.scss";
import SportButton from "../../components/SportButton/SportButton";

const SideBar = () => {
	const sportButtons = ["yoga", "swimming", "cycling", "weight"];

	return (
		<div className={styles.sidebar}>
			<div className={styles.sportButtonsContainer}>
				{sportButtons.map((sportButton) => (
					<SportButton key={sportButton} icon={sportButton} />
				))}
			</div>
			<div className={styles.copyRightContainer}>
				<p>© Copiryght, SportSee 2020</p>
			</div>
		</div>
	);
};

export default SideBar;
