import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderTab from "./header-tab";

import styles from "./header-section.module.scss";

const HeaderSection = ({ articles }) => {
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
          imageUrl={article.image.url}
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
