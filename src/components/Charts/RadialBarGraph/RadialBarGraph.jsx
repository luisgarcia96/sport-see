import React from "react";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import styles from "./RadialBarGraph.module.scss";

const data = [
	{
		name: "18-24",
		uv: 31.47,
		pv: 2400,
		fill: "#FF0101",
	},
];

const RadialBarGraph = () => {
	return (
		<div className={styles.radialBarGraphContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="70%"
					outerRadius="80%"
					barSize={9.5}
					data={data}
					startAngle={-135}
					endAngle={-475}
				>
					<RadialBar 
					minAngle={15} 
					background 
					clockWise 
					dataKey="uv" 
					cornerRadius={10}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
			<div className={styles.textContainer}>
				<p className={styles.percentage}>12%</p>
				<p className={styles.description}>de votre objectif</p>
			</div>
		</div>
	);
};

export default RadialBarGraph;
