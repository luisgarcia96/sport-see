import React from "react";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import styles from "./RadialBarGraph.module.scss";

const data = [
	{
		name: "18-24",
		uv: 31.47,
		pv: 2400,
		fill: "#8884d8",
	},
];

const RadialBarGraph = () => {
	return (
		<ResponsiveContainer
			width="100%"
			height="100%"
			className={styles.radialBarGraphContainer}
		>
			<RadialBarChart
				cx="50%"
				cy="50%"
				innerRadius="30%"
				outerRadius="60%"
				barSize={5}
				data={data}
			>
				<RadialBar minAngle={15} background clockWise dataKey="uv" />
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

export default RadialBarGraph;
