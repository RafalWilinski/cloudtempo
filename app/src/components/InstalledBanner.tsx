import React from "react";
import { cmdOrCtrl } from "../lib/cmdOrCtrl";

const Banner = () => (
  <div
    className="cloudtempo-install-banner"
    style={{
      position: "absolute",
      bottom: "24px",
      right: "24px",
      padding: "16px",
    }}
  >
    CloudTempo has been installed! Press <span>{cmdOrCtrl()}</span>{" "}
    <span>K</span> to open it.
  </div>
);

export default Banner;
