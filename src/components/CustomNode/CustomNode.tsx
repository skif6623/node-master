import {memo, useState} from "react";
import {Handle, NodeProps, Position} from "reactflow";

import {ListItem} from "../ListItem/ListItem";
import {NodeWrap, NodeRect, Select, SelectButton, SelectIcon, OptionList} from "./CustomNode.styled";

const options = ["Варіант 1", "Варіант 2", "Варіант 3", "Варіант 4", "Варіант 5", "Варіант 6"];

export const CustomNode = memo(
	({data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom}: NodeProps) => {
		const [active, setActive] = useState(false);
		return (
			<>
				<Handle type="target" position={targetPosition} isConnectable={isConnectable} />
				<NodeWrap>
					<NodeRect></NodeRect>
					<Select>
						<SelectButton onClick={() => setActive(!active)}>
							Вибрати значення <SelectIcon open={active} />
						</SelectButton>
						<OptionList open={active}>
							{options.map(item => {
								const value = item.split(" ");
								return (
									<ListItem key={item} value={value[1]}>
										{item}
									</ListItem>
								);
							})}
						</OptionList>
					</Select>
				</NodeWrap>
				<Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
			</>
		);
	},
);
