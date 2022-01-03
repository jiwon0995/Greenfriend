import Button01 from '../../../commons/buttons/01/Button01';
import { getDate } from '../../../commons/libraries/utils';
import * as S from './BoardList.styles';

export default function BoardListUI(props) {
	return (
		<S.Wrapper>
			<S.TopWrapper>
				<S.SearchInput placeholder="검색어를 입력해주세요" />
				<Button01 label="게시물 등록" onClick={props.onClickMoveToNew} />
			</S.TopWrapper>
			<S.Table>
				<S.Row>
					<S.ColumnNum>번호</S.ColumnNum>
					<S.ColumnTitle>제목</S.ColumnTitle>
					<S.ColumnWriter>작성자</S.ColumnWriter>
					<S.ColumnDate>날짜</S.ColumnDate>
				</S.Row>
				<div>
					{props.boardsOfBest?.fetchBoardsOfTheBest.map((el) => (
						<S.Row key={el._id}>
							<S.BestBoard>Best!</S.BestBoard>
							<S.ColumnTitle id={el._id} onClick={props.onClickMoveToDetail}>
								{el.title}
							</S.ColumnTitle>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
						</S.Row>
					))}
				</div>
				<div>
					{props.data?.fetchBoards.map((el, index: number) => (
						<S.Row key="index">
							<S.ColumnNum>{index + 1}</S.ColumnNum>
							<S.ColumnTitle id={el._id} onClick={props.onClickMoveToDetail}>
								{el.title}
							</S.ColumnTitle>
							<S.ColumnWriter>{el.writer}</S.ColumnWriter>
							<S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
						</S.Row>
					))}
				</div>
			</S.Table>
		</S.Wrapper>
	);
}
