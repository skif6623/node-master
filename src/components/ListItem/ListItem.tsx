import React, {FC, useState} from "react";
import {OptionItem, Checkbox} from "./ListItem.styled";

interface IListItemProps {
	children: React.ReactNode;
	value: string;
}

export const ListItem: FC<IListItemProps> = ({children, value}) => {
	const [checked, setIsChecked] = useState(false);

	const handleCheckboxChange = (e: any) => {
		setIsChecked(!checked);
		console.log(e.target.value);
	};
	return (
		<li>
			<OptionItem>
				<Checkbox type="checkbox" value={value} checked={checked} onChange={handleCheckboxChange} />
				{children}
			</OptionItem>
		</li>
	);
};
