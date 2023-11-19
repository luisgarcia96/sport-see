import useFetch from "../hooks/useFetch";
import { findUserById } from "../utils/findUserById";
import { formatScore, formatWeek } from "../utils/formatData";

export const useGetUserData = (userId, isMockedData = false) => {
	const fetchUrl = isMockedData
		? `${import.meta.env.VITE_PUBLIC_URL}/mocks/users.json`
		: `${import.meta.env.VITE_API_URL}/user/${userId}`;

	const { data, loading, error } = useFetch(fetchUrl);

	if (!data || loading) {
		return { user: null, loading, error };
	}

	const rawUser = isMockedData ? findUserById(data, userId) : data;

	const user = formatScore(rawUser); //Format the score property

	return { user, loading, error };
};

export const useGetUserActivity = (userId, isMockedData = false) => {
	const fetchUrl = isMockedData
		? `${import.meta.env.VITE_PUBLIC_URL}/mocks/activity.json`
		: `${import.meta.env.VITE_API_URL}/user/${userId}/activity`;

	const { data, loading, error } = useFetch(fetchUrl);

	if (!data || loading) {
		return { activity: null, loading, error };
	}

	const activity = isMockedData ? findUserById(data, userId) : data;

	return { activity, loading, error };
};

export const useGetUserSessions = (userId, isMockedData = false) => {
	const fetchUrl = isMockedData
		? `${import.meta.env.VITE_PUBLIC_URL}/mocks/averageSession.json`
		: `${import.meta.env.VITE_API_URL}/user/${userId}/average-sessions`;

	const { data, loading, error } = useFetch(fetchUrl);

	if (!data || loading) {
		return { sessions: null, loading, error };
	}

	const rawSessions = isMockedData ? findUserById(data, userId) : data;

	const sessions = formatWeek(rawSessions); //Format the week data

	return { sessions, loading, error };
};
