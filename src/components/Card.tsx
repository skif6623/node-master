import React, {FC} from "react";

export enum CardVariants {
	outlined = "outlined",
	primary = "primary",
}

interface IProps {
	width?: string;
	height?: string;
	children?: React.ReactElement;
	variant: CardVariants;
	getBtnValue: (text: string) => void;
}

export const Card: FC<IProps> = ({width, height, variant, children, getBtnValue}) => {
	const a = "Строка";
	return (
		<div
			onClick={() => getBtnValue(a)}
			style={{
				width,
				height,
				backgroundColor: variant === CardVariants.primary ? "red" : "transparent",
				outline: variant === CardVariants.outlined ? "1px solid red" : "none",
			}}
		>
			{children}
		</div>
	);
};
