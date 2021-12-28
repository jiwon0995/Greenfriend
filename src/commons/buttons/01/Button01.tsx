import styled from "@emotion/styled"

const Button = styled.div`
	width: 100px;
	height: 40px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
	background-color: #bea569;
  outline: none;
  cursor: pointer;
  /* margin-bottom: 30px; */
`;

interface Iprops { 
  label: string
  onClick?: any
}

export default function Button01(props: Iprops) {
  return <Button onClick={props.onClick}>{props.label}</Button>;
}