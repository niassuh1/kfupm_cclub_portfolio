import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        dir="rtl"
        className="dark:bg-[#24272B] pb-1 min-h-screen dark:text-white"
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
