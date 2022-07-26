import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Maxwell Kapezi Jr</title>
        <meta
          name="description"
          content="The official website for the Malawian writer, Maxwell Kapezi. A space where he shares his tips, writing process, and other work-in-progress updates."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
