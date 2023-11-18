"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  links: { href: string; label: string }[];
}

const LinksComponent = ({ links }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="text-lg font-semibold text-primary">
              {link.label}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary/90">
              {link.label}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default LinksComponent;
