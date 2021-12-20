import { useForm } from 'antd/lib/form/Form';
import BoardWriteUI from './BoardWrite.pregenter'
import { schema } from "../write/BoardWrite.vaildations"
import { yupResolver } from "@hookform/resolvers/yup"


interface Formvalues {
  title: string
  password: string
  contents: string;
}

export default function BoradWritePage() { 
  // formState : error가 담긴 곳
  const { handleSubmit, register, formState } = useForm({
    mode:"onChange",
		resolver: yupResolver(schema), //yup, hook-form 연결
	});
  
  const onClickSubmit = async (data: Formvalues) => {
    await 
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