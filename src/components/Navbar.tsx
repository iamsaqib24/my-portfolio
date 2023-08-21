// import signature from "../assets/sign.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const navBarOptions: string[] = [
    "About",
    "Skills",
    "Experience",
    "Project",
    "Contact",
  ];
  return (
    <div className="w-[100%] h-[10rem] bg-[#151515] p-3 flex flex-row justify-between pt-6 pr-6">
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-pink-600 font-great text-[2rem] hover:underline cursor-pointer font-bold"
      >
        Saqib
      </motion.h1>
      <ul className="text-white flex justify-between w-[40%] text-lg mt-2">
        {navBarOptions.map((item, index) => (
          <li className="hover:text-pink-600" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <motion.button
        className="bg-pink-600 w-[5rem] h-[3rem] rounded-lg text-white cursor-pointer"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        Resume
      </motion.button>
    </div>
  );
}
