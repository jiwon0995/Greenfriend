import {
	Wrapper,
	Title,
	ContentsWrapper,
	InputWrapper,
	Label,
	TitleInput,
	ContentsInput,
	Button,
	ImageBox,
	ImageWrapper,
	WriterInput,
	WriterWrapper,
} from '../write/BoardWrite.styles';

interface Iprops {
	handleSubmit: string;

}

export default function BoardWriteUI(props:Iprops) {
  return (
		<form onSubmit={props.handleSubmit(props.onClickSubmit)}>
			<Wrapper>
				<ContentsWrapper>
					<Title>🌱 게시글 등록</Title>
					<WriterWrapper>
						<InputWrapper>
							<Label>작성자</Label>
              <WriterInput type="text" {...props.register("title")}/>
						</InputWrapper>
						<InputWrapper>
							<Label>비밀번호</Label>
              <WriterInput type="password" {...props.register("password")}/>
						</InputWrapper>
					</WriterWrapper>
					<InputWrapper>
						<Label>제목</Label>
						<TitleInput type="text" />
					</InputWrapper>
					<InputWrapper>
						<Label>내용</Label>
						<ContentsInput />
					</InputWrapper>
					<ImageWrapper>
						<Label>이미지 등록</Label>
						<ImageBox>+</ImageBox>
					</ImageWrapper>
					<Button>등록하기</Button>
				</ContentsWrapper>
			</Wrapper>
		</form>
	);
}
