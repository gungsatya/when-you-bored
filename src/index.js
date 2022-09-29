import "./style.css";
import CustomFooter from "./components/custom-footer";
import CustomHeader from "./components/custom-header";
import Activity from "./components/activity";
import axios from "axios";
import _ from "lodash";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faRssSquare,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faRssSquare,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faRefresh
);

dom.watch();

customElements.define("x-header", CustomHeader);
customElements.define("x-footer", CustomFooter);
customElements.define("x-activity", Activity);

let changeActivityAttribute = (data) => {
  console.log(data);
  let activityElement = document.querySelector("x-activity");
  if (activityElement) {
    activityElement.setAttribute("activity-title", _.startCase(data.activity));
    activityElement.setAttribute("activity-type", _.startCase(data.type));
  }
};

let randomCallback = (event) => {
  event.preventDefault();
  axios
    .get("http://www.boredapi.com/api/activity/")
    .then((response) => changeActivityAttribute(response.data))
    .catch((error) => console.log(error));
};

document.querySelector("#randomBtn").addEventListener("click", randomCallback);
