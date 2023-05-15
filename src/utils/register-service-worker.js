export async function registerServiceWorker() {
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      const { Workbox } = await import('workbox-window')
      const workbox = new Workbox('/service-worker.js', { scope: '/' })

      const showSkipWaitingPrompt = () => {
        workbox.addEventListener('controlling', () => {
          location.reload()
        })

        const confirmValue = confirm('Update available. Do you want to update?')
        if (confirmValue) {
          workbox.messageSkipWaiting()
        }
      }

      workbox.addEventListener('waiting', showSkipWaitingPrompt)

      workbox.register()
    })
  }
}
