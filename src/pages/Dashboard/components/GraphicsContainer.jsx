import React from "react";
import PropTypes from "prop-types";

import BarGraph from "../../../components/Charts/BarGraph/BarGraph";
import LineGraph from "../../../components/Charts/LineGraph/LineGraph";
import RadarGraph from "../../../components/Charts/RadarGraph/RadarGraph";
import RadialBarGraph from "../../../components/Charts/RadialBarGraph/RadialBarGraph";

import styles from "../Dashboard.module.scss";

const GraphicsContainer = ({ activity, sessions, performance, score }) => {
	const activityData = activity.data.sessions;
	const sessionsData = sessions.data.sessions;

	return (
		<div className={styles.graphicsContainer}>
			<div className={styles.top}>
				<BarGraph activityData={activityData} />
			</div>
			<div className={styles.bottom}>
				<LineGraph sessionsData={sessionsData} />
				<RadarGraph performanceData={performance} />
				<RadialBarGraph score={score} />
			</div>
		</div>
	);
};

export default GraphicsContainer;

GraphicsContainer.propTypes = {
	activity: PropTypes.object.isRequired,
	sessions: PropTypes.object.isRequired,
	performance: PropTypes.object.isRequired,
	score: PropTypes.number.isRequired,
};
