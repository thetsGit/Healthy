import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#6CC57C",
    secondary: "#23233C",
    tertiary: "#7F8DA0",
    background: "#f2f6ff",
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
