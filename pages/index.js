import Head from "next/head";
import HeaderSection from "../sections/index/header-section";

function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Home | Bigetron Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderSection articles={articles} />

      <div id="about" className="my-20 container mx-auto italic text-center">
        <h2 className="text-2xl font-bold">What is Bigetron?</h2>
        <div className="text-lg leading-6 lg:text-2xl lg:leading-7 m-5">
          With over 150 national championships and a world championship,
          unmatched viewership hours, and a competent backroom staff, Bigetron
          is undoubtedly the leading organization in Southeast Asia.
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://shielded-atoll-06824.herokuapp.com/articles?_limit=4"
  );
  const articles = await res.json();
  return { props: { articles } };
}

export default Home;
