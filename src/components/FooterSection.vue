<template>
  <div id="footer" class="tf-footer flat-spacing">
    <div class="block-quote">
      <h5 class="quote-text font-3 fw-normal text-black-72">
        <span class="text-black-56">“</span>
        A design system isn’t a project. It’s a product serving products.
        <span class="text-black-56">“</span>
      </h5>
      <p class="quote-author font-3 text-black-56 h6 text-end ">
        Nathan Curtis
      </p>
    </div>
    <div class="br-line"></div>
    <div class="foot-bottom">
      <p class="text-nocopy text-black-56">
        All rights reserved <br>
        © 2025 Brian Portfolio
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isDark = ref(false)
let observer = null
onMounted(() => {
  isDark.value = document.body.classList.contains('dark-mode')
  observer = new MutationObserver(() => {
    isDark.value = document.body.classList.contains('dark-mode')
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

