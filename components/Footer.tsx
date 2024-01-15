import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl">
      <div className="flex flex-wrap md:flex-nowrap center-container-nav gap-8 md:gap-0 justify-between m-auto pt-10">
        <div className="flex flex-col w-full md:w-auto gap-4 items-center ">
          <Image
            src="/swopwhite.png"
            alt="swopwhite"
            height={21}
            width={88}
            className="text-center"
          />
          <Image
            src="/swopavatar.png"
            alt="swopavatar"
            height={164}
            width={148}
          />
        </div>
        <div className="flex flex-col w-full md:w-auto items-center">
          <p>Social Link</p>
          <div className="flex gap-3 items-center h-full mt-5 md:mt-0">
            <Link href="#">
              <FaFacebookF
                size={24}
                className="bg-white rounded-full p-1.5 text-black transition duration-700 border-white hover:text-white hover:bg-black hover:border"
              />
            </Link>
            <Link href="#">
              <FaInstagram
                size={24}
                className="bg-white rounded-full p-1.5 text-black transition duration-700 border-white hover:text-white hover:bg-black hover:border"
              />
            </Link>
            <Link href="#">
              <FaLinkedinIn
                size={24}
                className="bg-white rounded-full p-1.5 text-black transition duration-700 border-white hover:text-white hover:bg-black hover:border"
              />
            </Link>
            <Link href="#">
              <FaTwitter
                size={24}
                className="bg-white rounded-full p-1.5 text-black transition duration-700 border-white hover:text-white hover:bg-black hover:border"
              />
            </Link>
            <Link href="#">
              <FaYoutube
                size={24}
                className="bg-white rounded-full p-1.5 text-black transition duration-700 border hover:text-white hover:bg-black "
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto gap-4 items-center">
          <p>Scan to get swop</p>
          <Image
            src="/qrcode-white.png"
            alt="qrcode-white"
            height={93}
            width={93}
            className="border rounded-xl border-gray-500"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center py-2 text-sm">
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Streams</Link>
      </div>
      <div className="border-t border-gray-500">
        <p className="text-center py-2 text-xs">
          © 2022-Copywrite by swopme.co
        </p>
      </div>
    </div>
  );
};

export default Footer;
