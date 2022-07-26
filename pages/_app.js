import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full m-auto bg-gradient-to-bl from-gray-800 to-[#003120]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
