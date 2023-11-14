import React from "react";

import Greeting from "./components/Greeting";
import GraphicsContainer from "./components/GraphicsContainer";
import IntakesContainer from "./components/IntakesContainer";

import { useGetUserData } from "../../utils/API/apiService";

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
