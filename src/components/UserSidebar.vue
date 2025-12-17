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
        <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
        <li><a href="#"><i class="icon icon-linkin"></i></a></li>
        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
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

