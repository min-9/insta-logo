import { logo_template } from '../template/template.js';

export class InstaLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['size'];
  }

  get size() {
    return this.getAttribute('size');
  }

  disconnectedCallback() {
    alert('bye bye');
  }

  render() {
    const template = document.createElement('template');

    template.innerHTML = logo_template;

    const [_1, _2, insta] = template.content.children;

    insta.style.cssText = `--i:${+this.size + 5}`;

    this.shadowRoot.append(template.content.cloneNode(true));
  }
}
