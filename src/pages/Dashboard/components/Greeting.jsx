import React from "react";
import PropTypes from "prop-types";

import styles from "../Dashboard.module.scss";

const Greeting = ({ name }) => {
	return (
		<div className={styles.titleContainer}>
			<h1>
				Bonjour <span className={styles.name}>{name}</span>
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
};

export default Greeting;

Greeting.propTypes = {
	name: PropTypes.string.isRequired,
};
