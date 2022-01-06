// ApolloClient : 백엔드 설정, ApolloProvider: 각 페이지에 설정 전달, InMemoryCache: 내 컴퓨터 메모리에 임시 저장
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  // ApolloClient 주소 설정
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    // cache : 임시저장 공간
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
