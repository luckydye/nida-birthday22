import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { wordReplaceMap } from "../wordReplaceMap";

@customElement("nida-message")
export class NidaMessage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        text-align: left;
        font-size: 1rem;
        color: #333;
        margin: 4px 0;
      }

      p {
        white-space: pre-wrap;
        margin: 0;
      }

      img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
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

  onContentChange() {
    const data = this.innerText;
    const words = data.split(" ");
    const content: string[] = [];

    for (let word of words) {
      if (word in wordReplaceMap) {
        content.push(wordReplaceMap[word]);
      } else {
        content.push(word + " ");
      }
    }

    this.content = content;
    this.requestUpdate();
  }

  render() {
    return html`
      <p class="message">${this.content}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `;
  }
}
