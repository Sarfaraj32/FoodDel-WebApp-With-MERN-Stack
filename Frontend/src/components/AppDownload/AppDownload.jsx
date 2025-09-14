import React from "react";
import "./AppDpwnload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platform">
        <img
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.tomatoapp",
              "_blank"
            )
          }
          src={assets.play_store}
          alt=""
        />
        <img
          onClick={() =>
            window.open("https://apps.apple.com/app/id6446758473", "_blank")
          }
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
