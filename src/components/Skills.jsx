import {
  RiJavascriptFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiRedis,
  SiShadcnui,
  SiMonster,
  SiHeadlessui,
} from "react-icons/si";
import {
  FaHtml5,
  FaJava,
  FaReact,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaBitbucket,
} from "react-icons/fa";

const Skills = () => {
  return (
    <footer className="flex flex-wrap justify-between px-4 py-8 text-neutral-300 cursor-pointer">
      <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <h3 className="text-pink-500 mb-4 font-bold ">Languages</h3>
        <li className="mb-2 flex items-center hover:font-bold">
          <RiJavascriptFill className="inline mr-2 text-yellow-300 text-2xl" />
          <span>Javascript</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <BiLogoTypescript className="inline mr-2 text-blue-600 text-2xl" />
          <span>Typescript</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaHtml5 className="inline mr-2 text-orange-600 text-2xl" />
          <span>HTML</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaJava className="inline mr-2 text-red-600 text-2xl" />
          <span>Java</span>
        </li>
      </ul>
      <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <h3 className="text-red-500 mb-4 font-bold">Frontend</h3>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaReact className="inline mr-2 text-blue-500 text-2xl" />
          <span>React.js</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <RiNextjsFill className="inline mr-2 text-gray-600 text-2xl" />
          <span>Next.js</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiRedux className="inline mr-2 text-purple-600 text-2xl" />
          <span>Redux</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaCss3 className="inline mr-2 text-blue-600 text-2xl" />
          <span>CSS</span>
        </li>
      </ul>
      <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <h3 className="text-orange-500 mb-4 font-bold">Backend</h3>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaNodeJs className="inline mr-2 text-green-600 text-2xl" />
          <span>Node.js</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiExpress className="inline mr-2 text-gray-600 text-2xl" />
          <span>Express.js</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <BiLogoMongodb className="inline mr-2 text-green-600 text-2xl" />
          <span>MongoDB</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiRedis className="inline mr-2 text-red-600 text-2xl" />
          <span>Redis</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <RiSupabaseFill className="inline mr-2 text-green-400 text-2xl" />
          <span>Supabase</span>
        </li>
      </ul>
      <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <h3 className="text-green-500 mb-4 font-bold">CSS Libraries</h3>
        <li className="mb-2 flex items-center hover:font-bold">
          <RiTailwindCssFill className="inline mr-2 text-teal-400 text-2xl" />
          <span>Tailwind CSS</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiShadcnui className="inline mr-2 text-gray-600 text-2xl" />
          <span>shadcn</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaBootstrap className="inline mr-2 text-purple-700 text-2xl" />
          <span>Bootstrap</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiMonster className="inline mr-2 text-blue-600 text-2xl" />
          <span>Material UI</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <SiHeadlessui className="inline mr-2 text-gray-600 text-2xl" />
          <span>Headless UI</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaSass className="inline mr-2 text-pink-400 text-2xl" />
          <span>SASS</span>
        </li>
      </ul>
      <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <h3 className="text-purple-500 mb-4 font-bold ">Version Control</h3>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaGithub className="inline mr-2 text-black text-2xl" />
          <span>Github</span>
        </li>
        <li className="mb-2 flex items-center hover:font-bold">
          <FaBitbucket className="inline mr-2 text-blue-600 text-2xl" />
          <span>Bitbucket</span>
        </li>
      </ul>
    </footer>
  );
};

export default Skills;
