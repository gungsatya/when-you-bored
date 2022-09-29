export default class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.siteName = this.getAttribute("site-name") || "";
    this.render();
  }

  render() {
    let year = new Date().getFullYear();
    this.innerHTML = `
        <div class="site-footer">
            <div class="wrapper">
            <p>Copyright &copy; ${this.siteName} ${year}</p>
            </div>
        </div>
        `;
  }
}
