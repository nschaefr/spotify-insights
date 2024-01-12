const express = require("express");
const app = express();
const cors = require("cors");
const spotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

let authenticated = false;
scopes = ["user-top-read", "user-read-private", "user-read-email"];
const spotifyApi = new spotifyWebApi({
  clientId: process.env.SPOTIFY_API_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.CALLBACK_URL,
});

app.use(cors());

app.listen(8080, () => {
  console.log("App is listening on Port 8080!");
});

app.get("/", (req, res) => {
  res.send("Moin");
});

app.get("/login", (req, res) => {
  const html = spotifyApi.createAuthorizeURL(scopes);
  const redirectURL = html + "&show_dialog=true";
  res.send(redirectURL);
});

app.get("/logout", (req, res) => {
  authenticated = false;
  spotifyApi.setAccessToken(null);
  spotifyApi.setRefreshToken(null);

  res.send("spotify.com/logout");
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    authenticated = true;

    res.redirect("http://localhost:3000");
  } catch (err) {
    res.redirect("/#/error/invalid token");
  }
});

app.get("/profile", async (req, res) => {
  if (authenticated) {
    const userData = await spotifyApi.getMe();
    console.log(userData);
    res.send(userData);
  }
});
