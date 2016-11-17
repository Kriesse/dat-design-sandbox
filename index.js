const mount = require('choo/mount')
const css = require('sheetify')
const html = require('bel')

css('dat-colors')
css('tachyons')

css`
  .gray {
    color: var(--color-neutral--80);
  }
`

const footer1 = css`
  :host {
    background-color: var(--color-green);
  }
`

var tree = html`
  <body>
    <header><a>button</a></header>
    <main>
      <h1>Hello World</h1>
      <img src="" />
    </main>
    <footer class=${footer1}>stuff</footer>
  </body>
`

// replace body with tree
mount('body', tree)
