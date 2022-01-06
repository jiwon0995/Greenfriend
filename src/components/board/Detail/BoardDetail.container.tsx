import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.pregenter';

export default function BoardDetail() {
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.Id },
	});

	const [deleteBoard] = useMutation(DELETE_BOARD);

	const onClickMoveToList = () => router.push('/greenfriend/board/list');

	const onClickDelete = async () => {
		try {
			await deleteBoard({ variables: { boardId: router.query.Id } });
			alert('게시물이 삭제되었습니다.');
			router.push('/greenfriend/board/list');
		} catch (error) {
			console.log(error.message);
		}
	};
	const oClickMoveToEdit = () => router.push(`/greenfriend/board/${router.query.Id}/edit`)
	return (
		<BoardDetailUI
			data={data}
			onClickMoveToList={onClickMoveToList}
			onClickDelete={onClickDelete}
			oClickMoveToEdit={oClickMoveToEdit}
		/>
	);
}
