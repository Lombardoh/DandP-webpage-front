//This component includes the email field +
//the "Email" and envelope icon placeholders

const templateEmailfield = document.createElement('template');

templateEmailfield.innerHTML = `
       <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"/>
        </div>`;

class EmailField extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('email-field', EmailField);
