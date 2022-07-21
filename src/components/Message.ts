import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { wordReplaceMap } from "../wordReplaceMap";

function matchEmoji(str) {
  return str.matchAll(
    /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu
  );
}

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

      .emote img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
      }

      .emote {
        font-size: 32px;
        vertical-align: middle;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
      }
    `;
  }

  content: string = "";

  onContentChange() {
    const text = [...this.childNodes].find((node) => node.nodeName === "#text");
    const data = text?.data;

    const words = data.split(" ");
    const content: string[] = [];

    for (let word of words) {
      word = word.replace(/:/g, "");

      if (word in wordReplaceMap) {
        content.push(
          `<span class="emote"><img src="${wordReplaceMap[word]}" alt="${word}" /></span>`
        );
      } else {
        // check for emojis
        let result = word;
        for (let emoji of matchEmoji(word)) {
          result = result.replace(
            emoji[0],
            `<span class="emote">${emoji[0]}</span>`
          );
        }

        content.push(result);
      }
    }

    this.content = content.join(" ");
    this.requestUpdate();
  }

  render() {
    return html`
      <p class="message">${unsafeHTML(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `;
  }
}
