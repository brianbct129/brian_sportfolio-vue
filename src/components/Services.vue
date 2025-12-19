<template>
  <div id="service" class="section-service flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-service"></i>
      Services
    </div>
    <div id="accordion-service" class="service-accordion">
      <div class="service-accordion_item effectFade fadeUp no-div" role="presentation">
        <div class="accordion-action" data-bs-target="#service-1" role="button" data-bs-toggle="collapse" aria-controls="service-1" aria-expanded="true">
          <h4 class="text letter-space--2 text-black-72">Web Design</h4>
          <div class="ic-wrap"><span class="ic-accordion-custom"></span></div>
        </div>
        <div id="service-1" class="collapse show" data-bs-parent="#accordion-service">
          <div class="accordion-content">
            <div class="tf-grid-layout sm-col-2">
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-1.jpg" alt="Image">
                </div>
              </div>
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-2.jpg" alt="Image">
                </div>
              </div>
            </div>
            <div class="service-tag">
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">High-converting pages</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Clean visual systems</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">User-centered design</a>
            </div>
            <p class="service-desc text-black-56">
              Design websites that balance aesthetics and usability—making sure the brand feels modern while staying easy to navigate.
            </p>
          </div>
        </div>
      </div>
      <div class="br-line effectFade fadeUp no-div"></div>
      <div class="service-accordion_item effectFade fadeUp no-div" role="presentation">
        <div class="accordion-action collapsed" data-bs-target="#service-2" role="button" data-bs-toggle="collapse" aria-controls="service-2" aria-expanded="false">
          <h4 class="text letter-space--2 text-black-72">No-Code Development</h4>
          <div class="ic-wrap"><span class="ic-accordion-custom"></span></div>
        </div>
        <div id="service-2" class="collapse" data-bs-parent="#accordion-service">
          <div class="accordion-content">
            <div class="tf-grid-layout sm-col-2">
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-3.jpg" alt="Image">
                </div>
              </div>
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-4.jpg" alt="Image">
                </div>
              </div>
            </div>
            <div class="service-tag">
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Framer Builds</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Webflow Sites</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Scalable Launches</a>
            </div>
            <p class="service-desc text-black-56">
              Build fast, scalable websites using tools like Framer and Webflow—helping you launch quickly with designs that are easy to edit and maintain.
            </p>
          </div>
        </div>
      </div>
      <div class="br-line effectFade fadeUp no-div"></div>
      <div class="service-accordion_item effectFade fadeUp no-div" role="presentation">
        <div class="accordion-action collapsed" data-bs-target="#service-3" role="button" data-bs-toggle="collapse" aria-controls="service-3" aria-expanded="false">
          <h4 class="text letter-space--2 text-black-72">Brand Identity</h4>
          <div class="ic-wrap"><span class="ic-accordion-custom"></span></div>
        </div>
        <div id="service-3" class="collapse" data-bs-parent="#accordion-service">
          <div class="accordion-content">
            <div class="tf-grid-layout sm-col-2">
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-5.jpg" alt="Image">
                </div>
              </div>
              <div class="service-image">
                <div class="wrap_image">
                  <img width="340" height="206" src="../assets/images/section/service-6.jpg" alt="Image">
                </div>
              </div>
            </div>
            <div class="service-tag">
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Logo Design</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Visual Systems</a>
              <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link">Brand Guidelines</a>
            </div>
            <p class="service-desc text-black-56">
              I craft cohesive brand systems with logos, colors, and typography that reflect your values—making your business recognizable and trusted.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUpdated, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onUpdated(() => {
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})
</script>
<style scoped>
</style>
