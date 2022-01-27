import CommentsWrite from "../../../../src/components/units/board/Comments/write/CommentsWrite.container"
import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container"

export default function BoardDetailPage() { 
  return (
    <>
      <BoardDetail />
      <CommentsWrite />
    </>
  );
}