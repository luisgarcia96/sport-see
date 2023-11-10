import React from "react";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import CustomLineGraphTooltip from "./components/CustomLineGraphTooltip";

import styles from "./LineGraph.module.scss";

const data = [
	{
		name: "L",
		uv: 4000,
		pv: 200,
		amt: 2400,
	},
	{
		name: "M",
		uv: 3000,
		pv: 200,
		amt: 2210,
	},
	{
		name: "M",
		uv: 2000,
		pv: 280,
		amt: 2290,
	},
	{
		name: "J",
		uv: 2780,
		pv: 120,
		amt: 2000,
	},
	{
		name: "V",
		uv: 1890,
		pv: 450,
		amt: 2181,
	},
	{
		name: "S",
		uv: 2390,
		pv: 240,
		amt: 2500,
	},
	{
		name: "D",
		uv: 5490,
		pv: 200,
		amt: 2100,
	},
];

const LineGraph = () => {
	return (
		<div className={styles.lineGraphContainer}>
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={300}
					height={100}
					data={data}
					strokeWidth={0.4}
					onMouseMove={(e) => {
						if (e.isTooltipActive) {
							console.log(e);
						}
					}}
				>
					<XAxis
						dataKey="name"
						stroke="#fff"
						opacity={0.5}
						axisLine={false}
						tickLine={false}
						padding={{ left: 10, right: 10 }}
						// transform="scale(0.95) translate(5, 5)"
					/>
					<Tooltip content={<CustomLineGraphTooltip />} />
					<Line
						type="monotone"
						dataKey="pv"
						stroke="rgba(255, 255, 255, 0.7)"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 2, strokeWidth: 4, stroke: "white" }}
						// transform="scale(1.1, 1) translate(-10, 0)"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineGraph;
