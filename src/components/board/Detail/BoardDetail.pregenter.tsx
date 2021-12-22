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
import Button01 from "../../../commons/buttons/01/Button01"

export default function BoardDetailUI(props) {
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
      <Button01 label="목록"/>
		</Wrapper>
	);
}
