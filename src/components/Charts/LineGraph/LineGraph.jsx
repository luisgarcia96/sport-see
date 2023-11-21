import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import CustomLineGraphTooltip from "./components/CustomLineGraphTooltip";

import styles from "./LineGraph.module.scss";

const LineGraph = ({ sessionsData }) => {
	const formatedSessionsData = sessionsData.map((session) => {
		return {
			name: session.day,
			pv: session.sessionLength,
		};
	});

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
			<ResponsiveContainer
				width="100%"
				height="80%"
				style={{ marginTop: "3rem" }}
			>
				<LineChart
					width={300}
					height={100}
					data={formatedSessionsData}
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

LineGraph.propTypes = {
	sessionsData: PropTypes.array.isRequired,
};
