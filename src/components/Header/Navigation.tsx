import Link from "next/link";

interface Props {
  usedFor: string;
}

interface Links {
  title: string;
  path: string;
}

const links: Links[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Rooms",
    path: "/rooms",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Facilities",
    path: "/facilities",
  },
];

function Navigation({ usedFor }: Props) {
  const desktopLayout =
    "w-[50rem] h-full flex items-center justify-end gap-[5rem] text-white text-[1.3rem] font-semibold tracking-wide p-[0_1.5rem]";
  const mobileLayout =
    "w-full h-[40rem] flex flex-col items-end justify-center gap-[6rem] pr-[2rem] mt-[5rem]";

  return (
    <nav className={`${usedFor === "desktop" ? desktopLayout : mobileLayout}`}>
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className="text-[1.5rem] font-medium tracking-wide text-white drop-shadow-text-md lg:text-[1.3rem]"
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
