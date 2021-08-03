const fs = require('fs')
const path = require('path')

module.exports = function notifierPlugin() {
  const virtualFileId = '/vite-plugin-notifier'
  const absolutePath = path.join(__dirname, './notifier.js')
  const source = fs.readFileSync(absolutePath, 'utf-8')
  let config

  return {
    name: 'vite-plugin-notifier',
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
      if (config.command !== 'serve') {
        return
      }

      return [
        {
          tag: 'script',
          attrs: { type: 'module', src: '/vite-plugin-notifier' },
        }
      ]
    },

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    handleHotUpdate({server}) {
      server.ws.send({
        type: 'custom',
        event: 'notify'
      })
    }
  }
}
