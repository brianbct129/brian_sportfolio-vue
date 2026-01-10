<script setup>
import { onMounted, onBeforeUnmount, onUpdated, nextTick, ref } from 'vue'
import vectorUserLight from '../assets/images/item/vector-user.svg'
import vectorUserDark from '../assets/images/item/vector-user_dark.svg'
import logoLight from '../assets/images/logo/light.png'
import logoDark from '../assets/images/logo/dark.png'
import avatarImg from '../assets/images/avatar/avatar.png'
import cvPdf from '../assets/attachment/CV_Brian.pdf'
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

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    // Disable complex text animation on mobile to prevent stuttering
    const headline = root.value?.querySelector('.animationtext');
    if (headline) {
      // Ensure the first item is visible and others are hidden without animation loop
      const wrapper = headline.querySelector('.cd-words-wrapper');
      if (wrapper) {
         wrapper.style.display = 'inline-block';
         const items = wrapper.querySelectorAll('.item-text');
         items.forEach((item, index) => {
            item.style.position = 'relative';
            item.style.display = index === 0 ? 'inline' : 'none';
            item.style.opacity = '1';
            item.classList.remove('is-hidden');
            if (index === 0) item.classList.add('is-visible');
         });
      }
    }
    return;
  }

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
        <img loading="lazy" width="60" height="60" :src="isDark ? logoDark : logoLight" alt="Image">
      </div>
      <ul class="tf-social-icon-2 user-social d-grid">
        <li><a href="https://github.com/brianbct129"><i class="bi bi-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/brian-cavarel-thomas/"><i class="icon icon-linkin"></i></a></li>
        <li><a href="https://www.instagram.com/brcavth/"><i class="bi bi-instagram"></i></a></li>
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
          I help startups grow by blending systems analysis, agile leadership, and software engineering to turn complexity into scalable products.
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
          <a :href="cvPdf" download="CV_Brian.pdf" class="action-down">
            <i class="icon icon-download"></i>
            <span class="text-body-3">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

