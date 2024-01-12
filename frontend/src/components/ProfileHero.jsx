import phoneMock from "../assets/phone-mock.svg";
import spotifyIcon from "../assets/spotify-icon.png";
import axios from "axios";
import Table from "./Table/Table";
import { Slide } from "react-slideshow-image";

function ProfileHero() {
  return (
    <div className="mt-24 w-full flex flex-1 justify-center items-center py-8 text-white">
      <div className="max-w-[1400px] w-full flex flex-col px-10">
        <div>
          <div>
            <div>Top Artists</div>
            <div>Your Top Artists from the last x weeks</div>
          </div>
          <div>Slider</div>
        </div>
        <div>
          <div>
            <div>Top Tracks</div>
            <div>Your Top Tracks from the last x weeks</div>
          </div>
          <div>Slider</div>
        </div>
        <div>
          <div>
            <div>Top Genre</div>
            <div>Your Top Genre from the last x weeks</div>
          </div>
          <div>Slider</div>
        </div>
        <div>
          <div>
            <div>Recent Streams</div>
            <div>Your recently played tracks</div>
          </div>
          <div>Slider</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHero;
