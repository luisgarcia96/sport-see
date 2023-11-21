import React from "react";
import PropTypes from "prop-types";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import styles from "./RadialBarGraph.module.scss";

const RadialBarGraph = ({ score }) => {
	return (
		<div className={styles.radialBarGraphContainer}>
			<h2>Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="0%"
					outerRadius="0%"
					data={score}
					startAngle={-135}
					endAngle={-485}
				>
					<RadialBar
						data={[{ value: 1 }]}
						minAngle={15}
						fillOpacity={1}
						fill="#FFF"
						barSize={165}
						clockWise
						dataKey="value"
					/>
					<RadialBar
						minAngle={15}
						fill="#FF0101"
						barSize={10}
						clockWise
						dataKey={"value"}
						data={[{ value: score }]}
						cornerRadius={10}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
			<div className={styles.textContainer}>
				<p className={styles.percentage}>{score * 100}%</p>
				<p className={styles.description}>de votre objectif</p>
			</div>
		</div>
	);
};

export default RadialBarGraph;

RadialBarGraph.propTypes = {
	score: PropTypes.number.isRequired,
};
