import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#6CC57C",
    secondary: "#23233C",
    tertiary: "#7F8DA0",
    background: "#F2F6FF",
    special: "#EE6A6E",
    lightblue: "#DCEBF5",
  },
  paddings: {
    box: "1rem 1.8rem",
  },
  shadow: {
    sm: "5px 5px 5px 8px #00000002",
    lg: "0 0 15px 10px #00000010",
  },
  box: {
    fontsize: {
      sm: ".6rem",
      normal: ".8rem",
      lg: "1.1rem",
    },
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
