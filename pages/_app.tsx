import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/client';
import 'antd/dist/antd.css';
import { createUploadLink } from 'apollo-upload-client';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	
	const uploadLink = createUploadLink({
		uri: 'http://backend03.codebootcamp.co.kr/graphql',
		credentials: 'include', // 중요한 정보들을 포함시켜줘. 이거 해야 쿠키에 저장됨
	}); // 필요한 부분만 따로 만들어서 조립하는 방식

	// const client = new ApolloClient({
	// 	link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
	// 	cache: new InMemoryCache(),
	// });

	return (
		<>
				{/* <ApolloProvider> */}
						<Component {...pageProps} />
				{/* </ApolloProvider> */}
		</>
	);
}

export default MyApp;
