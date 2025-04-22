"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GET_USER_DETAILS } from "@/api/query";
import { fetchGraphQl } from "@/api/graphicql";
import { Login_token, UniqueId } from "@/api/clientActions";
import { image_url } from "@/api/url";
import { useRouter } from "nextjs-toploader/app";

export default function HeaderServerActions() {
  const [registered, setRegistered] = useState("");
  console.log(registered, "regitered");
  const [nameString, setNameString] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const router = useRouter();
  const Id = UniqueId();
  const getAccesstoken = Login_token();
  useEffect(() => {
    setRegistered(getAccesstoken);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let variable = {
        id: Id,
      };
      try {
        if (Id !== null) {
          const data = await fetchGraphQl(GET_USER_DETAILS, variable);
          setNameString(data?.MemberProfileDetails);
          setUserDetails(data?.MemberProfileDetails?.profileImagePath);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setErrorMessage(err);
      }
    };
    fetchData();
  }, []);

  const handleClick_signup = (e) => {
    router.push("/auth/signup");
  };
  const handleProfile = () => {
    router.push("/auth/my-profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRegistered("");
    localStorage.removeItem("Id");
    localStorage.removeItem("NameString");
    router.push("/");
  };

  return (
    <>
      <header className="bg-white shadow-md shadow-black/860">
        <nav
          className="mx-auto flex max-w-screen-2xl items-center justify-between lg:px-[120px] p-4 lg:py-6 h-[72px]"
          aria-label="Global"
        >
          <Link href="/">
            <img src="/img/job-theme-logo.svg" />
          </Link>

          <div className="relative inline-block text-center">
            {registered === "" ||
            registered === null ||
            registered === undefined ? (
              <button
                onClick={handleClick_signup}
                className="flex justify-center items-center bg-[#2563EB] hover:bg-[#4c7eea] px-[32px] max-[700px]:px-4 rounded-[50px] h-[47px] font-[700] text-base text-white whitespace-nowrap"
              >
                Join Now
              </button>
            ) : (
              <>
                <div>
                  {userDetails ? (
                    <button
                      type="button"
                      className="inline-flex w-12 h-12 justify-center  rounded-md    shadow-xs   hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded={isPopoverVisible}
                      aria-haspopup="true"
                      onClick={() => setPopoverVisible((prev) => !prev)}
                    >
                      {console.log(image_url + userDetails, "imgUrl134")}
                      <img
                        src={image_url + userDetails}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-12 h-12 bg-[#DD5B15] hover:bg-[#823e19] rounded-full text-2xl font-semibold text-white flex items-center justify-center "
                      onClick={() => setPopoverVisible((prev) => !prev)}
                    >
                      {nameString?.NameString}
                    </button>
                  )}
                </div>

                {isPopoverVisible && (
                  <div
                    className="absolute left-2 z-10 mt-1 w-32 bg-blue-50 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="px-3 py-2 bg-gray-50 border-gray-700 rounded-lg">
                      <button
                        type="button" // Changed to button
                        className="flex items-center space-x-2 mb-4 w-full h-full text-left text-[14px] font-normal leading-[17px] text-[#120B14] hover:bg-[#F1F1F1] rounded-lg"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-profile" // Unique ID
                        onClick={handleProfile}
                      >
                        <img src="/img/profile1.svg" alt="profile" />
                        My Profile
                      </button>

                      <button
                        type="button" // Changed to button
                        className="flex items-center ml-1 space-x-2 w-full h-full text-left text-[14px] font-normal leading-[17px] text-[#120B14] hover:bg-[#F1F1F1] rounded-lg cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-logout" // Unique ID
                        onClick={handleLogout}
                      >
                        <img src="/img/logout.svg" alt="logout" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
