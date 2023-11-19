import React from "react";

import BarGraph from "../../../components/Charts/BarGraph/BarGraph";
import LineGraph from "../../../components/Charts/LineGraph/LineGraph";
import RadarGraph from "../../../components/Charts/RadarGraph/RadarGraph";
import RadialBarGraph from "../../../components/Charts/RadialBarGraph/RadialBarGraph";

import styles from "../Dashboard.module.scss";

const GraphicsContainer = () => {
	return (
		<div className={styles.graphicsContainer}>
			<div className={styles.top}>
				<BarGraph />
			</div>
			<div className={styles.bottom}>
				<LineGraph />
				<RadarGraph />
				<RadialBarGraph />
			</div>
		</div>
	);
};

export default GraphicsContainer;