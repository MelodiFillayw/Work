const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUser = users.map(user => {
	const nameFull = '${user.firstname} ${user.lastname}';
	const memberStatus = user.points> 100? "Standard" : "Premium";

	return {nameFull, memberStatus};
});
console.log(newUser);