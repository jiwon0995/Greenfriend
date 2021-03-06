import * as S from './BoardWrite.styles';
import Input01 from '../../../commons/inputs/01/Input01';
import {
	FormState,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { Formvalues } from './BoardWrite.types';

interface Iprops {
	onClickSubmit: (data: Formvalues) => Promise<void>;
	handleSubmit: UseFormHandleSubmit<Record<string, any>>;
	register: UseFormRegister<Record<string, any>>;
	formState: FormState<Record<string, any>>;
	isEdit: boolean;
	data: any;
	onClickUpdate: (data: Formvalues) => Promise<void>;
}

export default function BoardWriteUI(props: Iprops) {
	return (
		<form
			onSubmit={
				props.isEdit
					? props.handleSubmit(props.onClickUpdate)
					: props.handleSubmit(props.onClickSubmit)
			}
		>
			<S.Wrapper>
				<S.ContentsWrapper>
					<S.Title>
						{props.isEdit ? 'πΏ κ²μκΈ μμ ' : 'π± κ²μκΈ λ±λ‘'}
					</S.Title>
					<S.WriterWrapper>
						<div>
							<Input01
								label="μμ±μ"
								register={props.register('writer')}
								type={'text'}
								defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ''}
							/>
							<S.Error>{props.formState.errors.writer?.message}</S.Error>
						</div>
						<div>
							<Input01
								label="λΉλ°λ²νΈ"
								register={props.register('password')}
								type={'password'}
							/>
							<S.Error>{props.formState.errors.password?.message}</S.Error>
						</div>
					</S.WriterWrapper>
					<S.InputWrapper>
						<S.Label>μ λͺ©</S.Label>
						<S.TitleInput
							type="text"
							{...props.register('title')}
							maxLength="50"
							defaultValue={props.data?.fetchBoard.title}
						/>
						<S.Error>{props.formState.errors.title?.message}</S.Error>
					</S.InputWrapper>
					<S.InputWrapper>
						<S.Label>λ΄μ©</S.Label>
						<S.ContentsInput
							{...props.register('contents')}
							defaultValue={props.data?.fetchBoard.contents}
						/>
						<S.Error>{props.formState.errors.contents?.message}</S.Error>
					</S.InputWrapper>
					<S.ImageWrapper>
						<S.Label>μ΄λ―Έμ§ λ±λ‘</S.Label>
						<S.ImageBox>+</S.ImageBox>
					</S.ImageWrapper>
					<S.Button>{props.isEdit ? 'μμ νκΈ°' : 'λ±λ‘νκΈ°'}</S.Button>
				</S.ContentsWrapper>
			</S.Wrapper>
		</form>
	);
}
