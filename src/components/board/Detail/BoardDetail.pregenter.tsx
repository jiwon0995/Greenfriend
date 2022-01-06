import {
	Wrapper,
	TitleWrapper,
	Title,
	WriterWrapper,
	Writer,
	Date,
	ContentsWrapper,
	Cotents,
} from './BoardDetail.styles';
import Button01 from '../../../commons/buttons/01/Button01';

interface Iprops {
	data: any;
	onClickMoveToList: () => void;
	onClickDelete: () => void;
	oClickMoveToEdit: () => void;
}

export default function BoardDetailUI(props:Iprops) {
	return (
		<Wrapper>
			<TitleWrapper>
				<Title>{props.data?.fetchBoard.writer}</Title>
			</TitleWrapper>
			<WriterWrapper>
				<Writer>작성자 : {props.data?.fetchBoard.title}</Writer>
				<Date>{props.data?.fetchBoard.createdAt.slice(0, 10)}</Date>
			</WriterWrapper>
			<ContentsWrapper>
				<Cotents>{props.data?.fetchBoard.contents}</Cotents>
			</ContentsWrapper>
			<div
				style={{
					display: 'flex',
					width: '600px',
					justifyContent: 'space-around',
				}}
			>
				<Button01 label="목록" onClick={props.onClickMoveToList} />
				<Button01 label="수정" onClick={props.oClickMoveToEdit} />
				<Button01 label="삭제" onClick={props.onClickDelete} />
			</div>
		</Wrapper>
	);
}
