<template>
  <div id="education" class="section-education-experience flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-edu"></i>
      Education & Experience
    </div>
    <div class="timeline scroll-down">
      <div class="timeline-line">
        <div class="prg-line"></div>
      </div>
      <div class="timeline-item effectFade fadeUp no-div">
        <p class="timeline-date text-black-56">2023 - Now</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="icon">
            <img class="image-switch" :data-dark="logo2" loading="lazy" width="32"
                 height="32" :src="logo3" alt="Image">
          </div>
          <p class="timeline-role fw-medium text-black-72">Independent Designer & No-Code Developer</p>
          <p class="timeline-desc text-body-3 text-black-56">
            Helping startups and creative teams launch websites, scale their brand identity, and build powerful no-code products with Framer.
          </p>
        </div>
      </div>
      <div class="timeline-item effectFade fadeUp no-div">
        <p class="timeline-date text-black-56">2021 - 2023</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="icon">
            <img class="image-switch" :data-dark="edu2Dark" width="29" height="32"
                 :src="edu2" alt="Image">
          </div>
          <p class="timeline-role fw-medium text-black-72">Web & Brand Designer at Creative Studio</p>
          <p class="timeline-desc text-body-3 text-black-56">
            Led projects across branding and digital design, delivering interfaces and websites that balanced usability with striking visual impact.
          </p>
        </div>
      </div>
      <div class="timeline-item effectFade fadeUp no-div">
        <p class="timeline-date text-black-56">2019 - 2021</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="icon">
            <img class="image-switch" width="29" height="32"
                 :src="edu3" alt="Image">
          </div>
          <p class="timeline-role fw-medium text-black-72">Junior Designer</p>
          <p class="timeline-desc text-body-3 text-black-56">
            Contributed to web and brand projects, focusing on consistency and clean visuals.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import logo3 from '../assets/images/logo/logo-3.svg'
import logo2 from '../assets/images/logo/logo-2.svg'
import edu2 from '../assets/images/item/edu-2.svg'
import edu2Dark from '../assets/images/item/edu-2_dark.svg'
import edu3 from '../assets/images/item/edu-3.svg'
</script>
<style scoped>
</style>
