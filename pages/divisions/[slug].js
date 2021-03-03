import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const DivisionPage = () => {
  const [teams, setTeams] = useState([]);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const slug = router.query.slug;
  const url = process.env.STRAPI_API_URL + "/games?slug=" + slug;

  useEffect(() => {
    if (slug === undefined) return;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          router.push(`/404`);
          return;
        }
        const division = data[0];
        setTitle(division.name);
        setTeams(division.teams);
      });
  }, [slug]);

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

export default DivisionPage;
