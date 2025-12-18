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
            <img class="image-switch" :data-dark="logo2" :data-light="logo3" loading="lazy" width="32"
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
            <img class="image-switch" :data-dark="edu2Dark" :data-light="edu2" width="29" height="32"
                 :src="edu2" alt="Image">
          </div>
          <p class="timeline-role fw-medium text-black-72">Web & Brand Designer at Creative Studio</p>
          <p class="timeline-desc text-body-3 text-black-56">
            Led projects across branding and digital design, delivering interfaces and websites that balanced usability with striking visual impact.
          </p>
        </div>
      </div>
      <div class="timeline-item effectFade fadeUp no-div">
        <p class="timeline-date text-black-56">2016 - 2020</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="icon">
            <img class="image-switch" width="180" height="120" :data-dark="edu3" :data-light="edu3Dark"
                 :src="edu3Dark" alt="Image">
          </div>
          <p class="timeline-role fw-medium text-black-72">SIS Undergraduate (B.Sc)</p>
          <p class="timeline-desc text-body-3 text-black-56">
            Earned a Bachelor’s degree in Information Systems from BINUS University in 2020 with a GPA of 3.14. This program equipped me with a deep understanding of the software development lifecycle, systems analysis, and project management. It was here that I developed the analytical mindset and technical proficiency required to bridge the gap between complex business requirements and scalable software solutions.
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
import edu3 from '../assets/images/item/light_binus.png'
import edu3Dark from '../assets/images/item/dark_binus.png'
</script>
<style scoped>
</style>
