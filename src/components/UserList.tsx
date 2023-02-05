import React, {FC} from "react";
import {IUser} from "../types/types";
import {UserItem} from "./UserItem";

interface UserListProps {
	usersList: IUser[];
}

export const UserList: FC<UserListProps> = ({usersList}) => {
	return (
		<div>
			<ul>
				{usersList.map(user => {
					return <UserItem key={user.id} user={user} />;
				})}
			</ul>
		</div>
	);
};
