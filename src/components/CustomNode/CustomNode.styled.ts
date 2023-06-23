import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io";

interface IListProps {
	open?: boolean;
}

export const NodeWrap = styled.div`
	width: 240px;
	height: 140px;
	padding-top: 20px;
	background-color: #d1e7dd;
	border-radius: 4px;
`;

export const NodeRect = styled.div`
	width: 234px;
	height: 72px;
	margin: 0 auto;
	margin-bottom: 5px;

	background-color: #ffffff;
	border-radius: 4px;
`;

export const Select = styled.div`
	width: 230px;
	margin: 0 auto;
`;

export const SelectButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
	padding: 0 12px;

	background-color: #ffffff;
	border: 1px solid #479f76;
	border-radius: 4px;
`;

export const SelectIcon = styled(IoIosArrowDown)`
	transform: ${({open}: IListProps) => (open ? "rotate(180deg)" : "none")};
	transition: transform 500ms ease;

	:hover {
		color: #2c7dfa;
	}
`;

export const OptionList = styled.ul<IListProps>`
	display: ${({open}) => (open ? "block" : "none")};
	border-radius: 4px;
`;
