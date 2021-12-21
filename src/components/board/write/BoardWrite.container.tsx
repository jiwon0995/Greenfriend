import { useForm } from 'react-hook-form';
import { schema } from "../write/BoardWrite.vaildations"
import { yupResolver } from "@hookform/resolvers/yup"
import { CREATE_BOARD } from "../write/BoardWrite.queries"
import { useMutation } from '@apollo/client';
import { Formvalues } from './BoardWrite.types';
import BoardWriteUI from './BoardWrite.pregenter'

export default function BoradWritePage() { 
  const [createBoard] = useMutation(CREATE_BOARD)
  // formState : error가 담긴 곳
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
		resolver: yupResolver(schema), //yup, hook-form 연결
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
			}); console.log(result.data?.createBoard._id);
    } 
    catch (error) { console.log(error) }
  }
  return (
		<BoardWriteUI
			onClickSubmit={onClickSubmit}
			handleSubmit={handleSubmit}
			register={register}
			formState={formState}
		/>
	);
}