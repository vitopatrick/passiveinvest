import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { links } from "./links";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = ({ show, close }: any) => {
  return (
    <AnimatePresence>
      <motion.nav
        initial="hidden"
        animate="visible"
        exit="remove"
        key={show}
        variants={{
          hidden: {
            x: "-100%",
            opacity: 0,
          },
          visible: {
            x: "0%",
            opacity: 1,
          },
          remove: {
            x: "100%",
          },
        }}
        transition={{
          duration: 1,
          staggerChildren: 0.2,
        }}
        className={
          show
            ? "absolute top-0 left-0 backdrop-blur bg-bg/50 h-screen w-screen z-30"
            : "hidden"
        }
      >
        <div className="absolute top-0 right-0 p-4">
          <FaTimes
            onClick={() => close(false)}
            className="text-3xl fill-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4 p-4 mt-10">
          {links.map((link: any) => (
            <Link
              href={`/${link.path}`}
              key={link.id}
              className="capitalize text-2xl text-center my-6 font-regular hover:text-teal-400 hover:underline"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col text-2xl gap-4 items-center justify-center">
            <Link
              href="/auth/sign-up"
              className="bg-teal-500 px-5 py-3 rounded hover:bg-teal-600"
            >
              Register
            </Link>
            <Link
              href="/auth/sign-in"
              className="text-teal-400 hover:underline hover:text-teal-600"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNavbar;
