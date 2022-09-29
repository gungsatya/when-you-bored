export default class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.siteName = this.getAttribute("site-name") || "";
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="site-header">
        <div class="wrapper">
            <h1 class="site-title">${this.siteName}</h1>
        </div>
    </div>`;
  }
}
