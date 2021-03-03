import Head from "next/head";
import { useRouter } from "next/router";

const DivisionPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Head>
        <title>{slug} | Bigetron Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="uppercase text-center font-bold text-6xl my-10 md:my-20">
        {slug}
      </h2>
    </>
  );
};

export default DivisionPage;
