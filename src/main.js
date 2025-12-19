import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/animate.css'
import './assets/css/styles.css'
import './assets/icon/icomoon/style.css'
import './assets/fonts/fonts.css'
import './assets/fonts/inter/inter.css'
// Vendor libs: load in order
import './vendor/jquery.min.js'
import './vendor/jquery-validate.js'
import './vendor/countto.js'
import './vendor/infinityslide.js'
import './vendor/bootstrap.min.js'
import './vendor/ScrollSmooth.js'
// Swiper from npm, expose globally for legacy scripts
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
window.Swiper = Swiper
// GSAP from npm to avoid window assignment errors
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// SplitText via vendor file (Club plugin)
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// expose for legacy scripts
window.gsap = gsap
window.ScrollTrigger = ScrollTrigger
window.ScrollToPlugin = ScrollToPlugin
// SplitText plugin is not loaded in module context; gsapAnimation.js will fallback without it.

const app = createApp(App)
app.mount('#app')

// Custom initializers that touch DOM: load after mount
import('./vendor/carousel.js')
import('./vendor/gsapAnimation.js')
import('./vendor/animation-change-text.js')

// Ensure initial theme and image switches match original HTML behavior
const defaultMode = document.body.getAttribute('data-default-mode')
if (defaultMode === 'dark') {
  document.body.classList.add('dark-mode')
}
const applyImageSwitch = () => {
  const isDark = document.body.classList.contains('dark-mode')
  document.querySelectorAll('.image-switch').forEach((img) => {
    const src = isDark ? img.getAttribute('data-dark') : img.getAttribute('data-light')
    if (src) img.setAttribute('src', src)
  })
}
applyImageSwitch()
window.applyImageSwitch = applyImageSwitch

window.refreshAnimations = () => {
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach(t => t.kill())
  }
  if (window.runAnimations) {
    window.runAnimations()
  }
}

new MutationObserver(() => {
  applyImageSwitch()
  if (window.refreshAnimations) {
    setTimeout(() => {
      window.refreshAnimations()
    }, 100)
  }
}).observe(document.body, { attributes: true, attributeFilter: ['class'] })
