const templateSignin = document.createElement('template');

templateSignin.innerHTML = `
  <div class="btn" 
    <a href="#"
        className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white text-center">
        Sign in
    </a>
</div>`;

class BtnSignin extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('button-signin', BtnSignin);
