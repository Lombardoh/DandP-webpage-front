const templateSignup = document.createElement('template');

templateSignup.innerHTML = `
  <div class="btn" 
    <a href="#" className="border-2 border-white rounded-full 
    px-12 py-2 inline-block font-semibold hover:bg-white
    hover:text-green-500">
    Sign up
    </a>
  </div>`;

class BtnSignup extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('button-signup', BtnSignup);
