import { useForm } from 'react-hook-form';
import { schema, schema2 } from './BoardWrite.vaildations';
import { yupResolver } from '@hookform/resolvers/yup';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useMutation } from '@apollo/client';
import { Formvalues } from './BoardWrite.types';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.pregenter';

interface Iprops {
	isEdit: boolean;
	data?: any
}
export default function BoradWritePage(props: Iprops) {
	const router = useRouter();
	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	// formState : error가 담긴 곳
	const { handleSubmit, register, formState } = useForm({
		mode: 'onChange',
		resolver: yupResolver(props.isEdit ? schema2 : schema), //yup, hook-form 연결
	});

	const onClickSubmit = async (data: Formvalues) => {
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: data.writer,
						password: data.password,
						title: data.title,
						contents: data.contents,
					},
				},
			});
			router.push(`/greenfriend/board/${result.data?.createBoard._id}`);
		} catch (error) {
			console.log(error);
		}
	};

	const onClickUpdate = async (data: Formvalues) => {
		interface IMyUpdateBoardInput {
			title?: string;
			contents?: string;
		}
		const myUpdateBoardInput: IMyUpdateBoardInput = {};
		if (data.title) myUpdateBoardInput.title = data.title
		if (data.contents) myUpdateBoardInput.contents = data.contents;
		
		try {
			const result = await updateBoard({
				variables: {
					updateBoardInput: myUpdateBoardInput,
					password: data.password,
					boardId: router.query.Id,
				},
			});
			router.push(`/greenfriend/board/${result.data?.updateBoard._id}`);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<BoardWriteUI
			onClickSubmit={onClickSubmit}
			handleSubmit={handleSubmit}
			register={register}
			formState={formState}
			isEdit={props.isEdit}
			data={props.data}
			onClickUpdate={onClickUpdate}
		/>
	);
}
