import Head from "next/head";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Maxwell Kapezi Jr</title>
        <meta
          name="description"
          content="Know about the Malawian writer, Maxwell Kapezi Jr, the author of The Man in Me, Maybe Tomorrow, a collection of short stories, and other books."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHero />
      <Footer />
    </>
  );
};

export default About;
