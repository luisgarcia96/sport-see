import React, { useState, useEffect, useRef, useCallback } from "react";

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
	//State
	const [highlightedWidth, setHighlightedWidth] = useState(0);
	const [currentXcoordinate, setCurrentXcoordinate] = useState(-1);

	//Refs
	const lineGraphContainer = useRef(null);

	/**
	 * Returns the width of the line graph container element.
	 * @returns {number} The width of the line graph container element.
	 */
	const getLineGraphContainerWidth = () => {
		if (lineGraphContainer.current) {
			return lineGraphContainer.current.getBoundingClientRect().width;
		}
		return 0;
	};

	/**
	 * Handles the hover event on the LineGraph component.
	 * @param {object} e - The event object.
	 */
	const handleHover = useCallback((e) => {
		if (e.isTooltipActive) {
			setCurrentXcoordinate(e.activeCoordinate.x);
		} else {
			setCurrentXcoordinate(-1);
		}
	}, []);

	useEffect(() => {
		if (currentXcoordinate >= 0) {
			const width = getLineGraphContainerWidth();
			setHighlightedWidth(width - currentXcoordinate);
		} else {
			setHighlightedWidth(0);
		}
	}, [currentXcoordinate]);

	return (
		<div className={styles.lineGraphContainer} ref={lineGraphContainer}>
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={300}
					height={100}
					data={data}
					strokeWidth={0.4}
					onMouseMove={(e) => {
						handleHover(e);
					}}
					style={{ position: "relative", zIndex: 2 }}
				>
					<XAxis
						dataKey="name"
						stroke="#fff"
						opacity={0.5}
						axisLine={false}
						tickLine={false}
						padding={{ left: 10, right: 10 }}
					/>
					<Tooltip content={<CustomLineGraphTooltip />} />
					<Line
						type="monotone"
						dataKey="pv"
						stroke="rgba(255, 255, 255, 0.7)"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 2, strokeWidth: 4, stroke: "white" }}
						style={{ zIndex: 3 }}
					/>
				</LineChart>
			</ResponsiveContainer>
			{highlightedWidth > 0 && (
				<div
					className={styles.higlightedZone}
					style={{ width: highlightedWidth, pointerEvents: "none" }}
				></div>
			)}
		</div>
	);
};

export default LineGraph;
