import React from "react";

import Greeting from "./components/Greeting";
import GraphicsContainer from "./components/GraphicsContainer";
import IntakesContainer from "./components/IntakesContainer";

import {
	useGetUserData,
	useGetUserActivity,
	useGetUserSessions,
} from "../../api/dataFetchService";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	//Get userId from URL
	const url = window.location.href;
	const userId = url.split("/")[3];

	//Get data from API
	const { user, loading: loadingUser } = useGetUserData(userId, true);
	const { activity, loading: loadingActivity } = useGetUserActivity(
		userId,
		false
	);
	const { sessions, loading: loadingSessions } = useGetUserSessions(
		userId,
		false
	);

	const isLoadingDashboard = loadingUser || loadingActivity || loadingSessions;

	if (isLoadingDashboard) {
		return <div>Loading...</div>;
	}

	const { keyData } = user.data;
	const { firstName } = user.data.userInfos;

	return (
		<div className={styles.dashboard}>
			<Greeting name={firstName} />
			<GraphicsContainer />
			<IntakesContainer keyData={keyData} />
		</div>
	);
};

export default Dashboard;
