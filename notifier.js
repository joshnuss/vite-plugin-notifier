if (import.meta.hot) {
  let element = document.getElementById('vite-update-notification')
  let timer

  if (!element) {
    element = document.createElement('div')
    element.id = 'vite-update-notification'
    element.style.position = 'fixed'
    element.style.right = 5
    element.style.top = 5
    element.style.zIndex = 1000
    element.style.padding = 5
    element.style.width = '20px'
    element.style.height = '20px'
    element.style.borderRadius = '50%'
    element.style.background = '#0a0'
    element.style.color = '#ddd'
    element.style.boxShadow = '1px 1px #ddd'
    element.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>`
    document.body.appendChild(element)
  }

  function update() {
    if (timer) {
      clearTimeout(timer)
    }
    element.style.transition = null
    element.style.opacity = 0

    setTimeout(() => {
      element.style.transition = 'all 0.5s ease-in'
      element.style.opacity = 1
    }, 200)

    timer = setTimeout(() => {
      element.style.opacity = 0
    }, 3000)
  }

  update()

  import.meta.hot.on('notify', update)
}
