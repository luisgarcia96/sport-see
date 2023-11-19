export const findUserById = (usersArray, id) => {
	if (!usersArray) {
		throw new Error("Users array is undefined");
	}

	const user = usersArray?.find((user) => user.data.id === Number(id) || user.data.userId === Number(id));
	if (!user) {
		throw new Error(`User with id ${id} not found`);
	}
	return user;
};