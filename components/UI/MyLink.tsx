import Link from "next/link";
import { NextRouter } from "next/router";
import { FC } from "react";

interface IMyLink {
  href: string;
  text: string;
  router: NextRouter;
}

const MyLink: FC<IMyLink> = ({ href, text, router }) => {
  return (
    <div className="me-3">
      <Link href={href}>
        <a className={router.pathname === href ? "text-primary" : ""}>{text}</a>
      </Link>
    </div>
  );
};

export default MyLink;
