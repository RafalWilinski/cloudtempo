import ReactDOM from "react-dom";
import App from "./App";
import OpenCloudTempoButton from "./OpenCloudTempoButton";
import "../styles/globals.css";

const app = document.getElementById("aws-search-app");
ReactDOM.render(<App />, app);

const navElement = document.getElementById("aws-search-app-btn");

if (navElement) {
  ReactDOM.render(<OpenCloudTempoButton />, navElement);
}
