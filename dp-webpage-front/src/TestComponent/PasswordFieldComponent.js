//This component includes the password field +
//the "Password" and padlock icon placeholders

const templatePasswordfield = document.createElement('template');

templatePasswordfield.innerHTML = `
    <div className="bg-gray-100 w-64 p-2 flex items-center">
        <MdLockOutline className="text-gray-400 mr-2" />
                <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 outline-none text-sm flex-1"/>
    </div>`;

class PasswordField extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('password-field', PasswordField);
