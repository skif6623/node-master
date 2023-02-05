// import React, {useState, FC} from "react";
import {Card, CardVariants} from "./components/Card";
import {UserList} from "./components/UserList";
// import {IUser} from "./types/types";

const App: React.FC = () => {
	// const [users, setUsers] = useState<IUser[]>([]);
	// const users: IUser[] = [
	// 	{
	// 		id: 1,
	// 		name: "Roman",
	// 		email: "roman4@gmail.com",
	// 		address: {street: "Chornovola", city: "Kalush", zipcode: "77300"},
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Julia",
	// 		email: "julia4@gmail.com",
	// 		address: {street: "Chornovola", city: "Kalush", zipcode: "77300"},
	// 	},
	// ];

	const getValue = (text: string) => {
		console.log(text);
	};

	return (
		<div>
			<Card getBtnValue={getValue} variant={CardVariants.primary} width="200px" height="200px">
				<button>Click me!</button>
			</Card>
			<UserList usersList={users} />
		</div>
	);
};

export default App;
