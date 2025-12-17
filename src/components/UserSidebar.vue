<script setup>
import { onMounted, onBeforeUnmount, onUpdated, nextTick, ref } from 'vue'
import vectorUserLight from '../assets/images/item/vector-user.svg'
import vectorUserDark from '../assets/images/item/vector-user_dark.svg'
import logoLight from '../assets/images/logo/logo.svg'
import logoDark from '../assets/images/logo/logo-2.svg'
import avatarImg from '../assets/images/avatar/avatar.png'

const root = ref(null)
const isDark = ref(false)
let t = null
let observer = null

onMounted(() => {
  isDark.value = document.body.classList.contains('dark-mode')
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDark.value = document.body.classList.contains('dark-mode')
      }
    })
  })
  observer.observe(document.body, { attributes: true })

  const headline = root.value?.querySelector('.animationtext')
  if (!headline) return
  if (headline.classList.contains('clip')) return
  const wrapper = headline.querySelector('.cd-words-wrapper')
  if (!wrapper) return
  const items = Array.from(wrapper.querySelectorAll('.item-text'))
  if (!items.length) return
  if (items[0].querySelector('i')) return
  items.forEach((item) => {
    const text = item.textContent || ''
    item.innerHTML = ''
    for (const ch of text) {
      const iEl = document.createElement('i')
      iEl.textContent = ch
      if (item.classList.contains('is-visible')) iEl.classList.add('in')
      item.appendChild(iEl)
    }
    item.style.opacity = '1'
  })
  let idx = items.findIndex((el) => el.classList.contains('is-visible'))
  if (idx < 0) idx = 0
  t = setInterval(() => {
    const cur = items[idx]
    const next = items[(idx + 1) % items.length]
    cur.classList.remove('is-visible')
    cur.classList.add('is-hidden')
    next.classList.remove('is-hidden')
    next.classList.add('is-visible')
    idx = (idx + 1) % items.length
  }, 2500)
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onUpdated(() => {
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onBeforeUnmount(() => {
  if (t) clearInterval(t)
  if (observer) observer.disconnect()
})
</script>
<template>
  <div class="sidebar-user" ref="root">
    <div class="wrap">
      <div class="user-image">
        <div class="image">
          <img loading="lazy" width="468" height="856" :src="avatarImg" alt="Image">
        </div>
        <div class="meta-left d-none d-sm-block">
          <div class="bg-item-svg">
            <img :src="isDark ? vectorUserDark : vectorUserLight" width="32" height="227" alt="Image">
          </div>
          <p class="avaiable-dot vertical text-body-3 text-black-72 fw-medium">
            <span class="text-vertical">Available for Work</span>
            <span class="dot"></span>
          </p>
        </div>
      </div>
      <div class="user-logo d-none d-lg-block">
        <img loading="lazy" width="40" height="40" :src="isDark ? logoDark : logoLight" alt="Image">
      </div>
      <ul class="tf-social-icon-2 user-social d-grid">
        <li><a href="#"><i class="icon icon-x"></i></a></li>
        <li><a href="#"><i class="icon icon-linkin"></i></a></li>
        <li><a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.72">
                <path opacity="0.2" d="M1.51502 11.2356L1.55752 4.87313C1.56502 3.72125 2.37065 2.73375 3.48252 2.51375L9.6269 1.29563C11.1031 1.00313 12.4738 2.15813 12.4638 3.6875L12.4213 10.0513C12.4131 11.2025 11.6075 12.1894 10.4956 12.41L4.35127 13.6281C2.87502 13.9206 1.50502 12.7656 1.51502 11.2356Z" fill="black"/>
                <path opacity="0.5" d="M4.52563 13.7744L4.56813 7.41062C4.575 6.25999 5.38125 5.27312 6.49313 5.05249L12.6375 3.83499C14.1138 3.54249 15.4844 4.69749 15.4744 6.22687L15.4319 12.5906C15.4244 13.7419 14.6188 14.7287 13.5069 14.9494L7.3625 16.1675C5.88625 16.46 4.51563 15.305 4.52563 13.7756V13.7744Z" fill="black"/>
                <path opacity="0.8" d="M7.53625 16.3125L7.57875 9.94875C7.58625 8.79687 8.39187 7.81062 9.50375 7.59L15.6481 6.37187C17.1244 6.07937 18.495 7.23437 18.485 8.76375L18.4425 15.1275C18.435 16.2794 17.6294 17.2662 16.5175 17.4862L10.3731 18.7044C8.89687 18.9969 7.52625 17.8419 7.53625 16.3125Z" fill="black"/>
              </g>
            </svg>
        </a></li>
      </ul>
      <div class="user-info">
        <p class="avaiable-dot text-body-3 fw-medium d-sm-none">
          <span class="dot"></span>
          <span>Available for Work</span>
        </p>
        <h5 class="greeting letter-space--2 text-white animationtext clip">
              Hey, I’m
              <span class="cd-words-wrapper">
                  <span class="item-text is-visible">Brian</span>
                  <span class="item-text is-hidden">System Analyst</span>
                  <span class="item-text is-hidden">Software Engineer</span>
                  <span class="item-text is-hidden">Scrum Master</span>
                  <span class="item-text is-hidden">Project Manager</span>
              </span>
          </h5>
        <p class="introduce text-white-56 letter-space--05 text-body-3">
          I help startups grow with smart design and
          no-code development, based in Cupertino, CA.
        </p>
        <div class="br-line"></div>
        <div class="action-group">
          <a href="#" class="tf-btn-action">
            <span class="ic-wrap">
              <i class="icon icon-arrow-right-top"></i>
            </span>
            <span class="text text-body-3 letter-space--05 fw-medium">Let’s talk</span>
            <span class="ic-wrap">
              <i class="icon icon-arrow-right-top"></i>
            </span>
          </a>
          <a href="#" class="action-down">
            <i class="icon icon-download"></i>
            <span class="text-body-3">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

