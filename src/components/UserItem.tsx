import React, {FC} from "react";
import {IUser} from "../types/types";

interface UserItemProps {
	user: IUser;
}
export const UserItem: FC<UserItemProps> = props => {
	return (
		<li>
			<p>{props.user.name}</p>
			<p>{props.user.email}</p>
			<p>{props.user.address.city}</p>
			<p>{props.user.address.street}</p>
		</li>
	);
};
