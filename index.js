const fs = require('fs')
const path = require('path')

module.exports = function notifierPlugin() {
  const virtualFileId = '/vite-plugin-notifier'
  const absolutePath = path.join(__dirname, './notifier.js')
  const source = fs.readFileSync(absolutePath, 'utf-8')

  return {
    name: 'vite-plugin-notifier',
    apply: 'serve',
    resolveId(id) {
      if (id == virtualFileId) {
        return id
      }
    },
    load(id) {
      if (id == virtualFileId) {
        return source
      }
    },
    transformIndexHtml(html) {
      return [
        {
          tag: 'script',
          attrs: { type: 'module', src: '/vite-plugin-notifier' },
        }
      ]
    },
    handleHotUpdate({server}) {
      server.ws.send({
        type: 'custom',
        event: 'notify'
      })
    }
  }
}
