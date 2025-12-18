<script setup>
import { onMounted, onBeforeUnmount, onUpdated, nextTick, ref } from 'vue'
import certif1 from '../assets/images/section/certif/digital_marketing.jpg'
import certif2 from '../assets/images/section/certif/certif_akuntansi.jpg'
import certif3 from '../assets/images/section/certif/copywriting.jpg'
import certif4 from '../assets/images/section/certif/certif_be.png'
import certif5 from '../assets/images/section/certif/certif_fe.png'

const certificate = [
  { name: 'Digital Marketing 101 for MSMEs', desc: 'Issued May 2025', year: '2025', img: certif1 },
  { name: 'Basic Accounting - LPAM', desc: 'Issued Dec 2024', year: '2024', img: certif2 },
  { name: 'Effective Copywriting for Sales Optimization', desc: 'Issued Aug 2024', year: '2024', img: certif3 },
  { name: 'Backend Web Development Program', desc: 'Issued Aug 2022', year: '2022', img: certif4 },
  { name: 'Frontend Web Development Program', desc: 'Issued Mar 2021', year: '2021', img: certif5 },
]

const root = ref(null)
function attachHoverHandlers(container) {
  const items = Array.from(container.querySelectorAll('.hover-cursor-img'))
  const offsetX = 20
  const offsetY = 20
  items.forEach((item) => {
    const hoverImage = item.querySelector('.hover-image')
    if (!hoverImage) return
    const onMove = (e) => {
      hoverImage.style.top = `${e.clientY + offsetY}px`
      hoverImage.style.left = `${e.clientX + offsetX}px`
    }
    const onEnter = () => {
      hoverImage.style.transform = 'scale(1)'
      hoverImage.style.opacity = '1'
    }
    const onLeave = () => {
      hoverImage.style.transform = 'scale(0)'
      hoverImage.style.opacity = '0'
    }
    item.addEventListener('mousemove', onMove)
    item.addEventListener('mouseenter', onEnter)
    item.addEventListener('mouseleave', onLeave)
    item.__hoverHandlers = { onMove, onEnter, onLeave, hoverImage }
  })
}
function detachHoverHandlers(container) {
  const items = Array.from(container.querySelectorAll('.hover-cursor-img'))
  items.forEach((item) => {
    const handlers = item.__hoverHandlers
    if (!handlers) return
    item.removeEventListener('mousemove', handlers.onMove)
    item.removeEventListener('mouseenter', handlers.onEnter)
    item.removeEventListener('mouseleave', handlers.onLeave)
    delete item.__hoverHandlers
    if (handlers.hoverImage) {
      handlers.hoverImage.style.transform = 'scale(0)'
      handlers.hoverImage.style.opacity = '0'
    }
  })
}
onMounted(() => {
  if (root.value) attachHoverHandlers(root.value)
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onUpdated(() => {
  if (root.value) {
    detachHoverHandlers(root.value)
    attachHoverHandlers(root.value)
  }
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onBeforeUnmount(() => {
  if (root.value) detachHoverHandlers(root.value)
})
</script>
<template>
  <div id="about" class="section-about flat-spacing" ref="root">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-user-circle"></i>
      About
    </div>
    <h4 class="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
      Architecting digital solutions <br class="d-none d-lg-block">
      through systems analysis, agile leadership, <br class="d-none d-lg-block">
      and engineering excellence
    </h4>
    <p class="s-desc text-black-56 scrolling-effect effectTop">
      I bridge the gap between business vision and technical execution. By integrating<br class="d-none d-lg-block">
      systems analysis, scrum mastery, and software engineering, I deliver products <br>
      <br>
      that are not just functional, but strategically aligned for growth—ensuring <br class="d-none d-lg-block">
      every system is built for scalability,
      performance, and impact.
    </p>
    <ul class="award-list">
      <li class="award-item hover-cursor-img" v-for="(certif, index) in certificate" :key="index">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">{{ certif.name }}</h6>
          <p class="award_desc text-black-56">{{ certif.desc }}</p>
        </div>
        <h6 class="award_year text-black-72">
          {{ certif.year }}
        </h6>
        <div class="certif_img hover-image">
          <img loading="lazy" width="158" height="224" :src="certif.img" alt="Image">
        </div>
      </li>
    </ul>
  </div>
  <!-- /About -->
</template>


