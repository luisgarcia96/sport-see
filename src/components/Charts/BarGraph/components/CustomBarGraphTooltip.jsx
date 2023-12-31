import PropTypes from "prop-types";

import styles from "../BarGraph.module.scss";

const CustomBarGraphTooltip = ({ payload, active }) => {
	if (active) {
		return (
			<div className={styles.barGraphTooltip}>
				<p className={styles.label}>{`${payload[0].value} kg`}</p>
				<p className={styles.label}>{`${payload[1].value} kcal`}</p>
			</div>
		);
	}

	return null;
};

export default CustomBarGraphTooltip;

CustomBarGraphTooltip.propTypes = {
	payload: PropTypes.arrayOf(
		PropTypes.shape({
			dataKey: PropTypes.string,
			value: PropTypes.number,
		})
	),
	active: PropTypes.bool,
};