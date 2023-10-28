import React from "react";

import IntakeTile from "../components/IntakeTile/IntakeTile";
import BarGraph from "../components/BarGraph/BarGraph";

import User from "../mocks/user.json";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	const { keyData } = User.data;

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
				<div className={styles.bottom}></div>
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
