import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../utils/user-context";

function NavBar() {
  const { username, imageURL, email } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  async function spotifyAuth() {
    const redirectUrl = await axios.get("/login");
    window.location.replace(redirectUrl.data);
  }

  async function logoutHandler() {
    const redirectUrl = await axios.get("/logout");
    window.location.replace(redirectUrl.data);
    window.location.replace("/");
  }

  return (
    <div className="w-full flex flex-1 justify-center py-8 text-white">
      <div className="max-w-[1400px] w-full flex justify-between px-10 items-center">
        <div className="w-2/3 flex justify-between">
          <div className="w-1/12">
            <p className="text-left font-bold text-lg leading-[22px]">
              Spotify Insights
            </p>
          </div>
          <div className="w-2/3 flex justify-between items-center font-medium text-sm">
            <div className="cursor-pointer hover:mt-2">Top Tracks</div>
            <div className="cursor-pointer hover:mt-2">Top Artists</div>
            <div className="cursor-pointer hover:mt-2">Top Genre</div>
            <div className="cursor-pointer hover:mt-2">Recent Streams</div>
          </div>
        </div>
        <div>
          {username === undefined && (
            <button className="font-bold text-sm border-[1px] rounded-xl border-white hover:bg-white">
              <p className="py-3 px-8 hover:text-ocean" onClick={spotifyAuth}>
                Sign In
              </p>
            </button>
          )}
          {username !== undefined && (
            <div className="flex flex-1 justify-center">
              <div
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="cursor-pointer"
              >
                <img
                  src={`${imageURL}`}
                  alt="img"
                  className="w-[50px] rounded-3xl"
                />
              </div>
              {toggle && (
                <div className="absolute py-3 font-bold text-sm mt-12">
                  <div>
                    <div className="bg-ocean pt-2 pb-2 px-2 shadow-md rounded-md">
                      <div className="p-2">
                        <div>{username}</div>
                        <div className="font-normal text-[#8f8f8f]">
                          {email}
                        </div>
                      </div>
                      <div className="bg-[#404040] h-[1px] mt-1"></div>
                      <div
                        className="mt-1 p-2 cursor-pointer hover:bg-[#1a1f26] rounded-md"
                        onClick={logoutHandler}
                      >
                        Log out
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
