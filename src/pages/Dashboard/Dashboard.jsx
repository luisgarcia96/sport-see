import React from "react";

import Greeting from "./components/Greeting";
import GraphicsContainer from "./components/GraphicsContainer";
import IntakesContainer from "./components/IntakesContainer";
import Loader from "../../components/Loader/Loader";
import NotFound from "../NotFound/NotFound";

import {
	useGetUserData,
	useGetUserActivity,
	useGetUserSessions,
	useGetUserPerformance,
} from "../../api/dataFetchService";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	//Get userId from URL
	const url = window.location.href;
	const userId = url.split("/")[3];

	//Get data from API
	const {
		user,
		loading: loadingUser,
		error: errorUser,
	} = useGetUserData(userId, true);
	const {
		activity,
		loading: loadingActivity,
		error: errorActivity,
	} = useGetUserActivity(userId, true);
	const {
		sessions,
		loading: loadingSessions,
		error: errorSessions,
	} = useGetUserSessions(userId, true);
	const {
		performance,
		loading: loadingPerformance,
		error: errorPerformance,
	} = useGetUserPerformance(userId, true);

	if (loadingUser || loadingActivity || loadingSessions || loadingPerformance) {
		return <Loader />;
	}

	if (errorUser || errorActivity || errorSessions || errorPerformance) {
		return <NotFound />;
	}

	const { keyData, formatedScore } = user.data;
	const { firstName } = user.data.userInfos;

	return (
		<div className={styles.dashboard}>
			<Greeting name={firstName} />
			<GraphicsContainer
				activity={activity}
				sessions={sessions}
				performance={performance}
				score={formatedScore}
			/>
			<IntakesContainer keyData={keyData} />
		</div>
	);
};

export default Dashboard;
