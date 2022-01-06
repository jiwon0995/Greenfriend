import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Label = styled.div`
	font-size: 15px;
	padding-right: 5px;
	color: #bea569;
`;
const Input = styled.input`
	width: 150px;
	height: 30px;
	border: 1px solid #bea569;
	outline: none;
	background: none;
	padding: 0px 10px;
	margin-right: 30px;
`;
interface Ipops {
	label: string;
	type: string;
	register: UseFormRegisterReturn;
	defaultValue?: string;
}
export default function Input01(props: Ipops) {
	return (
		<InputWrapper>
			<Label>{props.label}</Label>
			<Input
				{...props.register}
				type={props.type}
				defaultValue={props.defaultValue}
			></Input>
		</InputWrapper>
	);
}
