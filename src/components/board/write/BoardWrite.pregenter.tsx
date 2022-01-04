import {
	Wrapper,
	Title,
	ContentsWrapper,
	InputWrapper,
	Error,
	TitleInput,
	ContentsInput,
	Button,
	ImageBox,
	ImageWrapper,
	WriterWrapper,
	Label,
} from '../write/BoardWrite.styles';
import Input01 from '../../../commons/inputs/01/Input01';

export default function BoardWriteUI(props) {
	return (
		<form onSubmit={props.handleSubmit(props.onClickSubmit)}>
			<Wrapper>
				<ContentsWrapper>
					<Title>{props.isEdit ? '🌿 게시글 수정' : '🌱 게시글 등록'}</Title>
					<WriterWrapper>
						<div>
							<Input01
								label="작성자"
								register={props.register('writer')}
								type={'text'}
							/>
							<Error>{props.formState.errors.writer?.message}</Error>
						</div>
						<div>
							<Input01
								label="비밀번호"
								register={props.register('password')}
								type={'password'}
							/>
							<Error>{props.formState.errors.password?.message}</Error>
						</div>
					</WriterWrapper>
					<InputWrapper>
						<Label>제목</Label>
						<TitleInput
							type="text"
							{...props.register('title')}
							maxLength="50"
						/>
						<Error>{props.formState.errors.title?.message}</Error>
					</InputWrapper>
					<InputWrapper>
						<Label>내용</Label>
						<ContentsInput type="text" {...props.register('contents')} />
						<Error>{props.formState.errors.contents?.message}</Error>
					</InputWrapper>
					<ImageWrapper>
						<Label>이미지 등록</Label>
						<ImageBox>+</ImageBox>
					</ImageWrapper>
					<Button>{props.isEdit ? '수정하기' : '등록하기'}</Button>
				</ContentsWrapper>
			</Wrapper>
		</form>
	);
}
