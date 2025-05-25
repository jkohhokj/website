import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Image from "next/image";

import Link from "./Link";

const Header = () => {
  return (
    <header className="flex w-5/6 justify-between py-10 mx-auto">
      <div>
        <Link href="/" aria-label={siteMetadata.title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Link
                href="/"
                className="hidden text-stone-500 font-extrabold text-2xl sm:block"
              >
                Jayden Koh
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden text-stone-500 font-extrabold text-2xl sm:block"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </header>
  );
};

export default Header;
