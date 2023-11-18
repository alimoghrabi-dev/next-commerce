import Link from "next/link";
import LinksComponent from "./LinksComponent";
import CartButton from "./CartButton";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/Men",
    label: "Men",
  },
  {
    href: "/Women",
    label: "Women",
  },
  {
    href: "/Teens",
    label: "Teens",
  },
];

const Navbar = () => {
  return (
    <header className="mb-8 border-b h-24 flex items-center justify-between">
      <div className="flex items-center justify-between mx-auto w-full px-4 sm:px-12">
        <Link href={"/"}>
          <h1 className="text-3xl md:text-4xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          <LinksComponent links={links} />
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
