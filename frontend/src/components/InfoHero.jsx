import phoneMock from "../assets/phone-mock.svg";
import spotifyIcon from "../assets/spotify-icon.png";
import axios from "axios";

function InfoHero() {
  async function spotifyAuth() {
    const redirectUrl = await axios.get("/login");
    window.location.replace(redirectUrl.data);
  }

  return (
    <div className="mt-24 w-full flex flex-1 justify-center items-center py-8 text-white">
      <div className="max-w-[1400px] flex items-center">
        <div className="w-1/2 px-10 mt-[-120px]">
          <p className="font-bold text-[65px]">Exploring Your</p>
          <p className="font-bold text-[65px] text-spotify mt-3">
            Music Universe.
          </p>
          <p className="mt-14 text-xl leading-[26px] font-light">
            With Spotify Insights, you can delve deep into the data of your own
            Spotify account to gain exciting revelations about your listening
            habits without waiting for your yearly Spotify Wrapped. Discover
            which artists and genres dominate your playlists and much more. Find
            out how Spotify Insights can help you better understand your musical
            journey and get even more from your music experience. Dive in and be
            prepared to be amazed by the insights!
          </p>
          <div className="mt-12">
            <button className="font-bold px-2 py-1 flex rounded-xl bg-spotify hover:bg-spotifyhover">
              <div
                className="flex items-center py-2 px-3"
                onClick={spotifyAuth}
              >
                <p className="pr-2">Sign In with</p>
                <img src={spotifyIcon} width={"30px"} />
              </div>
            </button>
          </div>
        </div>
        <div className="pl-20">
          <img src={phoneMock} width={"650px"} />
        </div>
      </div>
    </div>
  );
}

export default InfoHero;
