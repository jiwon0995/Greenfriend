import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoradWritePage from "../../../../../src/components/board/write/BoardWrite.container";

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			writer
			title
			contents
			createdAt
		}
	}
`;
export default function BoardEdit() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, { variables: {boardId:router.query.Id}});

  return <BoradWritePage isEdit={true} data={data}/>;
}