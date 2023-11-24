import React from "react";
import PropTypes from "prop-types";
import useWindowSizeMultiplier from "../../../hooks/useWIndowSizeMultiplier";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

import styles from "./RadarGraph.module.scss";

const RadarGraph = ({ performanceData }) => {
	const windowSizeMultiplier = useWindowSizeMultiplier();
	const formatedPerformanceData = performanceData?.data.data.map(
		(performance) => {
			return {
				subject: performance.kind,
				A: performance.value,
			};
		}
	);

	//Calculate font size in function of window size
	const fontSize = 10 * windowSizeMultiplier;

	return (
		<div className={styles.radarGraphContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="75%"
					data={formatedPerformanceData}
				>
					<PolarGrid stroke="#ffffff" gridType="polygon" />
					<PolarAngleAxis
						dataKey="subject"
						stroke="#FFFFFF"
						tickLine={false}
						axisLine={false}
						tick={{ fontSize: fontSize }}
					/>
					<Radar
						dataKey="A"
						stroke="red"
						fill="rgba(255, 1, 1)"
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarGraph;

RadarGraph.propTypes = {
	performanceData: PropTypes.object.isRequired,
};
