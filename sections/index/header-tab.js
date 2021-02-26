import Link from "next/link";
import Image from "next/image";

import styles from "./header-tab.module.scss";

const HeaderTab = ({ isActive, title, imageUrl, link }) => {
  return (
    <div className={`${isActive ? `block` : `hidden`} h-full w-full`}>
      <Image
        width={800}
        height={400}
        layout="responsive"
        src={imageUrl}
        alt={title}
      />
      <div className={`absolute bottom-0 left-0 ${styles.gradient}`}></div>
      <Link href={link}>
        <a className="text-lg w-full md:w-1/2 md:text-3xl lg:text-5xl font-bold uppercase text-white hover:text-primary">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default HeaderTab;