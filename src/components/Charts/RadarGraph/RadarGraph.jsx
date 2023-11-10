import React from "react";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

import styles from "./RadarGraph.module.scss";

const data = [
	{
		subject: "Math",
		A: 120,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Chinese",
		A: 98,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "English",
		A: 86,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Geography",
		A: 99,
		B: 100,
		fullMark: 150,
	},
	{
		subject: "Physics",
		A: 85,
		B: 90,
		fullMark: 150,
	},
	{
		subject: "History",
		A: 65,
		B: 85,
		fullMark: 150,
	},
];

const RadarGraph = () => {
	return (
		<div className={styles.radarGraphContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
					<PolarGrid stroke="#ffffff" gridType="polygon"/>
					<PolarAngleAxis
						dataKey="subject"
						stroke="#FFFFFF"
						tickLine={false}
						axisLine={false}
						tick={{ fontSize: 12 }}
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
