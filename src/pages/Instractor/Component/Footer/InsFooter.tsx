import NavIcon from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import FaceBookIcon from "@/assets/images/facebook.png";
import TwitterIcon from "@/assets/images/twitter.png";
import GithubIcon from "@/assets/images/github.png";
import MicroSoftIcon from "@/assets/images/microsoft.png";
import GoogleIcon from "@/assets/images/search.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1E293B] p-12  text-white">
        <div className="mx-auto w-full max-w-full-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 md:w-[33%] space-y-3 me-5">
              <Link to="/" className="flex items-center">
                <img src={NavIcon} className="h-8 me-3" alt="Byway Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Byway
                </span>
              </Link>
              <p className="text-[14px] font-normal text-[#CBD5E1]">
                Empowering learners through accessible and engaging online
                education.
              </p>
              <p className="text-[14px] font-normal text-[#CBD5E1]">
                Byway is a leading online learning platform dedicated to
                providing high-quality, flexible, and affordable educational
                experiences.{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-4 sm:grid-cols-3 sm:justify-items-center">
              <div>
                <h2 className="text-gray-100 mb-6 text-sm font-semibold  uppercase">
                  Get Help
                </h2>
                <ul className="text-gray-300  font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Latest Articles
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                  Programs
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Art & Design
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Business
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      IT & Software
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Languages
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Programming
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                  Contact Us
                </h2>
                <ul className="text-gray-300  font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Address: 123 Main Street, Anytown, CA 12345
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Tel: +(123) 456-7890
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Mail: bywayedu@webkul.in
                    </Link>
                  </li>
                </ul>
                <div className="my-5 flex items-center justify-between ">
                  <div className="p-2 rounded-full bg-white">
                    <img
                      src={FaceBookIcon}
                      alt="FacebookLogo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-white">
                    <img
                      src={GithubIcon}
                      alt="FacebookLogo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-white">
                    <img
                      src={GoogleIcon}
                      alt="FacebookLogo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-white">
                    <img
                      src={TwitterIcon}
                      alt="FacebookLogo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-white">
                    <img
                      src={MicroSoftIcon}
                      alt="FacebookLogo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
