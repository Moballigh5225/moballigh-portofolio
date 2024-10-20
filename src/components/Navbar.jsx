import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center rounded-lg">
        <h1 className="font-bold text-4xl transition ease-in-out delay-150 duration-300 hover:-translate-1 hover:scale-110 hover:shadow-2xl hover:shadow-black hover:rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
          MI
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4   text-2xl ">
        <a
          className="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300 hover:text-[#0A66C2]"
          href="https://www.linkedin.com/in/moballighul-islam-620a8a160/"
        >
          <FaLinkedin />
        </a>
        <a
          className="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300 hover:text-black"
          href="https://github.com/Moballigh5225"
        >
          <FaGithub />
        </a>
        <a
          className="resume font-bold text-sm p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-1 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-black"
          href="https://drive.google.com/file/d/1iXS20Tlz9bLooD_h3rvbiyuoRAjuZsHv/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
