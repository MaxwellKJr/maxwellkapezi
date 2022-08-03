// import "nextjs-breadcrumbs/dist/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full m-auto bg-gradient-to-bl from-gray-800 to-secondary">
      <Header />
      <AnimatePresence>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          exitBeforeEnter
          className="content flex-1"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
