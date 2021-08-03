vite-plugin-notifier
---------

Provides visual feedback that HMR has completed. Only runs in dev mode.

## Setup

To install the package:

```bash
npm i --save-dev vite-plugin-notifier
```

Then add the plugin to your `vite.config.js`:

```javascript
import notifier from 'vite-plugin-notifier'

export default {
  plugins: [
    notifier()
  ]
}
```

## License

MIT
