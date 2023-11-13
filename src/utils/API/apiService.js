import { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import UsersArray from "../../mocks/user.json";

const findUserById = (id) => {
	const user = UsersArray.find((user) => user.data.id === Number(id));
	if (!user) {
		throw new Error(`User with id ${id} not found`);
	}
	return user;
};

export const useGetUserData = (id, isMockedData = false) => {
	const { data, loading, error } = useFetch(`http://localhost:3000/user/${id}`);

	const user = useMemo(() => {
		return isMockedData ? findUserById(id) : data;
	}, [id, isMockedData, data]);

	return {
		user,
		loading,
		error,
	};
};
