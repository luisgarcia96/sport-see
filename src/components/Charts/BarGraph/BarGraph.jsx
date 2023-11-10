import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./components/CustomTooltip";
import RoundedBar from "./components/RoundedBar";
import styles from "./BarGraph.module.scss";

const data = [
	{
		name: "1",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "2",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "3",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "4",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "5",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "6",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "7",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "8",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "9",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "10",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const BarGraph = () => {
	return (
		<div className={styles.barGraphContainer}>
			<div className={styles.barGraphHeader}>
				<h2>Activité quotidienne</h2>
				<div className={styles.barGraphLegend}>
					<div className={styles.barGraphLegend_One}>
						<span className={styles.circle}></span>
						<span>Poids (kg)</span>
					</div>
					<div className={styles.barGraphLegend_Two}>
						<span className={styles.circle}></span>
						<span>Calories brûlées (kcal)</span>
					</div>
				</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 0,
						right: 60,
						left: 40,
						bottom: 40,
					}}
					barGap={8}
				>
					<CartesianGrid
						stroke="#DEDEDE"
						strokeDasharray="2"
						vertical={false}
					/>
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						dy={15}
						tick={{ fontSize: 14 }}
					/>
					<YAxis
						orientation="right"
						axisLine={false}
						tickLine={false}
						dx={35}
						tick={{ fontSize: 14 }}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Bar dataKey="pv" fill="#020203" barSize={8} shape={<RoundedBar />} />
					<Bar dataKey="uv" fill="#FF0101" barSize={8} shape={<RoundedBar />} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarGraph;
