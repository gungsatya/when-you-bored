import _ from "lodash";

export default class Activity extends HTMLElement {
  connectedCallback() {
    this.activityTitle =
      this.getAttribute("activity-title") || "Nothings to do";
    this.activityType =
      this.getAttribute("activity-type") ||
      "Click 'Random' button in the below";
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="activity-item">
                <div class="activity-container">
                    <div class="activity-info">
                        <h3 class="activity-title">
                        ${this.activityTitle}
                        </h3>
                        <span class="activity-type"> ${this.activityType}</span>
                    </div>
                </div>
            </div>
            `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    let nameCamelCase = _.camelCase(name);
    this[nameCamelCase] = newValue;
    console.log(
      `new value ${nameCamelCase} : from '${oldValue}' to '${newValue}'`
    );
    this.render();
  }

  static get observedAttributes() {
    return ["activity-title", "activity-type"];
  }
}
