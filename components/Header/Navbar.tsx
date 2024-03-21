import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { Loader2, Phone } from "lucide-react";
import { Search } from "./Search";
import { DarkLight } from "../DarkLightMode";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="bg-inherit mx-auto md:px-10 xl:px-52 sticky top-0 inset-x-0 z-40 flex justify-between items-center px-3 py-5 border-b border-b-zinc-400">
      <ul className="relative max-w-[1920px] w-full mx-auto flex gap-3 sm:gap-0 items-center justify-between">
        <li className="">
          <Link href={"/"}>
            <Image
              src={Logo}
              width={55}
              height={55}
              alt="Blogify Website Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </li>
        <li className="w-full sm:w-fit">
          <Suspense
            fallback={<Loader2 className="w-6 h-6 animate-spin text-primary" />}
          >
            <Search />
          </Suspense>
        </li>
        <li className="flex items-center gap-2">
          <Link href={"/contact"}>
            <Button
              size={"icon"}
              className="border border-gray-400 h-8 w-8 sm:h-10 sm:w-10"
              variant={"outline"}
            >
              <Phone className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-zinc-100" />
            </Button>
          </Link>
          <DarkLight />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
