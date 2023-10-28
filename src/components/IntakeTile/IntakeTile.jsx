import React from "react";
import PropTypes from "prop-types";

import styles from "./IntakeTile.module.scss";

const IntakeTile = ({ type, intakeCount }) => {
	let title = "";
	let unit = "";

	switch (type) {
		case "calorieCount":
			title = "Calories";
			unit = "kCal";
			break;
		case "proteinCount":
			title = "Proteines";
			unit = "g";
			break;
		case "lipidCount":
			title = "Lipides";
			unit = "g";
			break;
		case "carbohydrateCount":
			title = "Glucides";
			unit = "g";
			break;
		default:
			break;
	}

	return (
		<div className={styles.intakeTile}>
			<img src={`/src/assets/PNG/icon-${title}.png`} alt="intake-tile" />
			<div className={styles.content}>
				<p className={styles.count}>
					{intakeCount}{' '}
					<span className={styles.unit}>{unit}</span>
				</p>
				<p className={styles.title}>{title}</p>
			</div>
		</div>
	);
};

IntakeTile.propTypes = {
	type: PropTypes.oneOf([
		"calorieCount",
		"proteinCount",
		"carbohydrateCount",
		"lipidCount",
	]).isRequired,
	intakeCount: PropTypes.number.isRequired,
};

export default IntakeTile;
