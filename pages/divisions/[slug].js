import Head from "next/head";
import ErrorPage from "next/error";

const DivisionPage = ({ data }) => {
  if (data.length === 0) return <ErrorPage statusCode={404} />;

  const title = data[0].name;
  const teams = data[0].teams;

  return (
    <>
      <Head>
        <title> {title} | Bigetron Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="uppercase text-center font-bold text-6xl my-10 md:my-20">
        {title}
      </h2>
    </>
  );
};

DivisionPage.getInitialProps = async (ctx) => {
  const slug = ctx.query.slug;
  const url = process.env.STRAPI_API_URL + "/games?slug=" + slug;
  const res = await fetch(url);
  const json = await res.json();
  return { data: json };
};
export default DivisionPage;
