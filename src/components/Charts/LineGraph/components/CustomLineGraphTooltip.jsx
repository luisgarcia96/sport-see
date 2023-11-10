import PropTypes from "prop-types";

import styles from "../LineGraph.module.scss";

const CustomLineGraphTooltip = ({ active, payload }) => {
	if (active) {
		return (
			<div className={styles.lineGraphTooltip}>
				<p>{payload[0].value} min</p>
			</div>
		);
	}
};

CustomLineGraphTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

export default CustomLineGraphTooltip;
