import { Button } from "@/components/ui/button";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AvatarIcon() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <Button
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="text-[17px] cursor-pointer font-semibold text-[#3B82F6]  py-5.5 px-3.5 rounded-full bg-[#BFCDEF]"
      >
        O
      </Button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="userDropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="py-1">
          <Link
            to="#"
            className="font-normal text-[#334155] block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Profile
          </Link>
        </div>
        <div className="py-1">
          <Link
            to="#"
            className="font-normal text-[#334155] block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            My Courses
          </Link>
        </div>
        <div className="py-1">
          <Link
            to="#"
            className="font-normal text-[#334155] block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Revenue
          </Link>
        </div>
        <div className="py-1">
          <Link
            to="#"
            className="font-normal text-[#334155] block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            My Reviews
          </Link>
        </div>
        <div className="py-1">
          <Link
            to="#"
            className="font-normal text-[#334155] block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Setting
          </Link>
        </div>
        <div className="py-1">
          <Button className="cursor-pointer w-full flex font-normal text-[#EA4335] justify-start px-4 py-2 text-sm hover:bg-red-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </Button>
        </div>
      </div>
    </>
  );
}
