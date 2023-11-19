import React from "react";
import PropTypes from "prop-types";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import CustomBarGraphTooltip from "./components/CustomBarGraphTooltip";
import RoundedBar from "./components/RoundedBar";

import styles from "./BarGraph.module.scss";

const BarGraph = ({ activityData }) => {
	const formatedData = activityData.map((session, idx) => {
		return {
			name: idx + 1,
			pv: session.kilogram,
			uv: session.calories,
		};
	});

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
					data={formatedData}
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
					<Tooltip content={<CustomBarGraphTooltip />} />
					<Bar dataKey="pv" fill="#020203" barSize={8} shape={<RoundedBar />} />
					<Bar dataKey="uv" fill="#FF0101" barSize={8} shape={<RoundedBar />} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarGraph;

BarGraph.propTypes = {
	activityData: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string,
			calories: PropTypes.number,
			kilogram: PropTypes.number,
		})
	),
};
