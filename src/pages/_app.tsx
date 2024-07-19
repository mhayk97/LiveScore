import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { barlowFont } from "@/styles/fonts";
import { Header } from "@/components";
import { Content } from "./styles";
import { useRouter } from "next/router";
import { useLoader } from "@/hooks";
import Loader from "@/components/loader/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useLoader();
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className={barlowFont.className}>
        <Header onClick={handleClick} />
        <Content>{loading ? <Loader /> : <Component {...pageProps} />}</Content>
      </main>
    </ThemeProvider>
  );
}
