import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import CustomFooter from "./components/custom-footer";
import CustomHeader from "./components/custom-header";
import Activity from "./components/activity";
import axios from "axios";
import _ from "lodash";

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
