import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./header-section.module.scss";

import articleImage from "../../assets/img/article.png";

const articles = [
  {
    title: "test",
    image: articleImage,
    slug: "test",
  },
  {
    title: "test1",
    image: articleImage,
    slug: "test",
  },
  {
    title: "test2",
    image: articleImage,
    slug: "test",
  },
];

const HeaderTab = ({ isActive, title, image, link }) => {
  return (
    <div className={`${isActive ? `block` : `hidden`} h-full w-full`}>
      <Image
        width={800}
        height={400}
        layout="responsive"
        src={image}
        alt={title}
      />
      <div
        className={`absolute bottom-0 left-0 ${styles.gradient}`}
      ></div>
      <Link href={link}>
        <a className="text-lg w-full md:w-1/2 md:text-3xl lg:text-5xl font-bold uppercase text-white hover:text-primary">
          {title}
        </a>
      </Link>
    </div>
  );
};

const HeaderSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const next = (active + 1) % articles.length;
    const timer = setTimeout(() => setActive(next), 5000);
    return () => clearTimeout(timer);
  }, [active, articles.length]);

  return (
    <div className={`${styles.hero} text-center relative h-full w-full`}>
      {articles.map((article, index) => (
        <HeaderTab
          key={`article-${article.id}`}
          isActive={index === active}
          title={article.title}
          image={article.image}
          link={`/news/${article.slug}`}
        />
      ))}

      <div className={`${styles.pills}`}>
        {articles.map((article, index) => (
          <button
            aria-label="Featured News Carousel Button"
            key={`button-${index}`}
            onClick={() => setActive(index)}
            className={`${
              active === index ? "bg-primary" : "bg-white"
            } bg-white w-6 h-3 mx-1 md:w-8 md:mx-3 lg:w-10 rounded focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSection;
