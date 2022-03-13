import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import LoadingIndicator from "components/home/LoadingIndicator";

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
    sm: "5px 5px 8px 5px #00000002",
    lg: "0 0 20px 10px #00000010",
    rightBottom: "10px 10px 20px 0 rgba(0, 0, 0, .1)",
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {   
      setLoading(true);
  }, [])
  

  return (
    <>
      {
        loading ? 
        (
        <ThemeProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
        ) : 
        <LoadingIndicator />
      }
    </>
  );
}

export default MyApp;
