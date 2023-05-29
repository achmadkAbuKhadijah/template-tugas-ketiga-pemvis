import 'aos/dist/aos.css'

import AOS from 'aos'

import { registerServiceWorker } from './utils'

AOS.init()

// register service worker
registerServiceWorker()
