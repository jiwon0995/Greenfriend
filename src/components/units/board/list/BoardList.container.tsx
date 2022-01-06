import BoardListUI from "./BoardList.pregenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartpage] = useState<number>(1);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { variables: { page: startPage } }
  );

  const { data: boardsOfBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>) =>
    router.push(`${e.target.id}`);
  const onClickMoveToNew = () => router.push("new");
  return (
    <BoardListUI
      data={data}
      boardsOfBest={boardsOfBest}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToNew={onClickMoveToNew}
    />
  );
}
