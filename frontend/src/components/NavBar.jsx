import React from "react";
import { ButtonHTMLAttributes } from "react";

function NavBar() {
  return (
    <div className="w-full flex flex-1 justify-center py-8 text-white">
      <div className="max-w-[1400px] w-full flex justify-between px-10 items-center">
        <div className="w-2/3 flex justify-between">
          <div className="w-1/12">
            <p className="text-left font-bold text-lg leading-[22px]">
              Spotify Insights
            </p>
          </div>
          <div className="w-2/3 flex justify-between items-center font-normal text-sm">
            <div className="cursor-pointer hover:mt-2">Top Tracks</div>
            <div className="cursor-pointer hover:mt-2">Top Artists</div>
            <div className="cursor-pointer hover:mt-2">Top Genre</div>
            <div className="cursor-pointer hover:mt-2">Statistics</div>
          </div>
        </div>
        <div>
          <button className="font-bold text-sm border-[1px] rounded-xl border-white hover:bg-white">
            <p className="py-3 px-8 hover:text-ocean">Sign In</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
