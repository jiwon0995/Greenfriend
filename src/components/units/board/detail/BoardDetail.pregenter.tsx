import * as S from './BoardDetail.styles';
import Button01 from '../../../commons/buttons/01/Button01';

interface Iprops {
	data: any;
	onClickMoveToList: () => void;
	onClickDelete: () => void;
	oClickMoveToEdit: () => void;
}

export default function BoardDetailUI(props:Iprops) {
	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title>{props.data?.fetchBoard.writer}</S.Title>
			</S.TitleWrapper>
			<S.WriterWrapper>
				<S.Writer>작성자 : {props.data?.fetchBoard.title}</S.Writer>
				<S.Date>{props.data?.fetchBoard.createdAt.slice(0, 10)}</S.Date>
			</S.WriterWrapper>
			<S.ContentsWrapper>
				<S.Cotents>{props.data?.fetchBoard.contents}</S.Cotents>
			</S.ContentsWrapper>
			<S.BtnWrapper>
				<Button01 label="목록" onClick={props.onClickMoveToList} />
				<Button01 label="수정" onClick={props.oClickMoveToEdit} />
				<Button01 label="삭제" onClick={props.onClickDelete} />
			</S.BtnWrapper>
		</S.Wrapper>
	);
}
