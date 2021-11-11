import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        dir="rtl"
        className="dark:bg-[#24272B] min-h-screen pb-0 dark:text-white overflow-hidden flex flex-col"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
