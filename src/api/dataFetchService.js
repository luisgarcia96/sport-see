import useFetch from "../hooks/useFetch";
import { findUserById } from "../utils/findUserById";
import { formatScore } from "../utils/formatData";

export const useGetUserData = (id, isMockedData = false) => {
	const fetchUrl = isMockedData
		? `${import.meta.env.VITE_PUBLIC_URL}/mocks/users.json`
		: `${import.meta.env.VITE_API_URL}/user/${id}`;

	const { data, loading, error } = useFetch(fetchUrl);

	if (!data || loading) {
		return { user: null, loading, error };
	}

	const rawUser = isMockedData ? findUserById(data, id) : data;

	const user = formatScore(rawUser); //Format the score property

	return { user, loading, error };
};
