import React from "react";

import IntakeTile from "../components/IntakeTile/IntakeTile";
import BarGraph from "../components/Charts/BarGraph/BarGraph";
import LineGraph from "../components/Charts/LineGraph/LineGraph";
import RadarGraph from "../components/Charts/RadarGraph/RadarGraph";
import RadialBarGraph from "../components/Charts/RadialBarGraph/RadialBarGraph";

import { useGetUserData } from "../utils/API/apiService";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	//Get userId from URL
	const url = window.location.href;
	const userId = url.split("/")[3];

	//Get user data from API
	const { user, loading } = useGetUserData(userId);

	if (loading) {
		return <div>Loading...</div>;
	}
	const { keyData } = user.data;

	return (
		<div className={styles.dashboard}>
			<div className={styles.titleContainer}>
				<h1>
					Bonjour <span className={styles.name}>Thomas</span>
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<div className={styles.graphicsContainer}>
				<div className={styles.top}>
					<BarGraph />
				</div>
				<div className={styles.bottom}>
					<LineGraph />
					<RadarGraph />
					<RadialBarGraph />
				</div>
			</div>
			<aside className={styles.intakeContainer}>
				{Object.entries(keyData).map(([intake, count]) => (
					<IntakeTile type={intake} intakeCount={count} key={intake} />
				))}
			</aside>
		</div>
	);
};

export default Dashboard;
