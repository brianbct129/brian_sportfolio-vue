<template>
  <div id="about" class="section-about flat-spacing" ref="root">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-user-circle"></i>
      About
    </div>
    <h4 class="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
      Designing brands and <br class="d-none d-lg-block">
      websites with clarity, creativity, <br class="d-none d-lg-block">
      and no-code speed
    </h4>
    <p class="s-desc text-black-56 scrolling-effect effectTop">
      I combine web design, brand identity, and no-code development to help<br class="d-none d-lg-block">
      businesses move faster while staying true to their personality. <br>
      <br>
      Every project is approached with both strategy and style—making sure <br class="d-none d-lg-block">
      design isn’t just good-looking, but also
      purposeful and effective.
    </p>
    <ul class="award-list">
      <li class="award-item hover-cursor-img">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">Website of the Day</h6>
          <p class="award_desc text-black-56">CSSDA</p>
        </div>
        <h6 class="award_year text-black-72">
          2019
        </h6>
        <div class="award_img hover-image">
          <img loading="lazy" width="158" height="224" src="../assets/images/section/award-1.jpg" alt="Image">
        </div>
      </li>
      <li class="award-item hover-cursor-img">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">Public Awards - UI</h6>
          <p class="award_desc text-black-56">CSSDA</p>
        </div>
        <h6 class="award_year text-black-72">
          2019
        </h6>
        <div class="award_img hover-image">
          <img loading="lazy" width="158" height="224" src="../assets/images/section/award-2.jpg" alt="Image">
        </div>
      </li>
      <li class="award-item hover-cursor-img">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">Public Awards - INN</h6>
          <p class="award_desc text-black-56">CSSDA</p>
        </div>
        <h6 class="award_year text-black-72">
          2019
        </h6>
        <div class="award_img hover-image">
          <img loading="lazy" width="158" height="224" src="../assets/images/section/award-3.jpg" alt="Image">
        </div>
      </li>
      <li class="award-item hover-cursor-img">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">Site of the Month</h6>
          <p class="award_desc text-black-56">Awwwards</p>
        </div>
        <h6 class="award_year text-black-72">
          2018
        </h6>
        <div class="award_img hover-image">
          <img loading="lazy" width="158" height="224" src="../assets/images/section/award-4.jpg" alt="Image">
        </div>
      </li>
      <li class="award-item hover-cursor-img">
        <div class="left">
          <h6 class="award_name letter-space--2 text-black-72">Site of the Day</h6>
          <p class="award_desc text-black-56">Awwwards</p>
        </div>
        <h6 class="award_year text-black-72">
          2017
        </h6>
        <div class="award_img hover-image">
          <img loading="lazy" width="158" height="224" src="../assets/images/section/award-5.jpg" alt="Image">
        </div>
      </li>
    </ul>
  </div>
  <!-- /About -->
</template>
<script setup>
import { onMounted, onBeforeUnmount, onUpdated, nextTick, ref } from 'vue'
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
<style scoped>
</style>
