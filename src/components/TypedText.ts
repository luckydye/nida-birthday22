import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, ms);
  });
}

@customElement("types-text")
export class TypedText extends LitElement {
  static get styles() {
    return css`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `;
  }

  content: Array<string | TemplateResult> = [];

  lastData: null | string = null;

  async onContentChange() {
    const text = [...this.childNodes].find((node) => node.nodeName === "#text");
    const data = text?.data;

    const chars = data.split("");

    this.content = [];

    this.lastData = data;
    for (let char of chars) {
      if (this.lastData != data) {
        break;
      }

      this.content.push(char);
      this.requestUpdate();

      await wait(20 + Math.random() * 50);
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    const observer = new MutationObserver((mutationList) => {
      this.onContentChange();
    });

    observer.observe(this, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    this.onContentChange();
  }

  render() {
    return html` ${this.content.join("")} `;
  }
}
