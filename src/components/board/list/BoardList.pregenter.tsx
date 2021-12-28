import Button01 from '../../../commons/buttons/01/Button01';
import {
	Wrapper,
	Row,
	ColumnNum,
	ColumnWriter,
	ColumnTitle,
	ColumnDate,
	Table,
	SearchInput,
	TopWrapper,
} from './BoardList.styles';

export default function BoardListUI(props) { 

  return (
		<Wrapper>
			<TopWrapper>
				<SearchInput placeholder="검색어를 입력해주세요" />
				<Button01 label="게시물 등록" onClick={props.onClickMoveToNew} />
			</TopWrapper>
			<Table>
				<Row>
					<ColumnNum>번호</ColumnNum>
					<ColumnTitle>제목</ColumnTitle>
					<ColumnWriter>작성자</ColumnWriter>
					<ColumnDate>날짜</ColumnDate>
				</Row>
				<div>
					{props.data?.fetchBoards.map((el, index) => (
						<Row key="index">
							<ColumnNum>{index + 1}</ColumnNum>
							<ColumnTitle id={el._id} onClick={props.onClickMoveToDetail}>
								{el.title}
							</ColumnTitle>
							<ColumnWriter>{el.writer}</ColumnWriter>
							<ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
						</Row>
					))}
				</div>
			</Table>
		</Wrapper>
	);
}