<template>
  <div id="tech" class="section-tech-stack flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-tech-stack"></i>
      Tech Stack
    </div>
    <h4 class="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
      See how my expertise with these <br class="d-none d-sm-block">
      tools drives better results
    </h4>
    <ul class="tech-list">
      <template v-for="(tech, index) in techList" :key="tech.name">
        <li class="wg-tech">
          <div class="tech-infor effectFade fadeUp no-div">
            <div class="tech_image">
              <img
                loading="lazy"
                :width="tech.w"
                :height="tech.h"
                :src="isDark && tech.srcDark ? tech.srcDark : tech.src"
                :alt="tech.name"
              >
            </div>
            <div class="tech_info">
              <p class="info__name fw-medium text-black-72">{{ tech.name }}</p>
              <p class="info__duty text-black-56 text-body-3">{{ tech.desc }}</p>
            </div>
          </div>
          <div class="tech-progress">
            <div class="progress-line" :data-progress="tech.progress">
              <p class="progress-num text-caption">
                <span class="counter">
                  <span class="number" data-speed="1500" :data-to="tech.progress">{{ tech.progress }}</span>
                  %
                </span>
              </p>
            </div>
          </div>
        </li>
        <li v-if="index < techList.length - 1" class="br-line"></li>
      </template>
    </ul>
  </div>
</template>
<script setup>
  import { ref, onMounted, onBeforeUnmount, onUpdated, nextTick } from 'vue'
import tech2Light from '../assets/images/section/tech-2.svg'
import tech2Dark from '../assets/images/section/tech-2_dark.svg'
import tech3 from '../assets/images/section/tech-3.svg'
import light_sql from '../assets/images/section/light_sql.png'
import visual_paradigm from '../assets/images/section/visual_paradigm.png'
import trello from '../assets/images/section/trello.png'

const isDark = ref(false)
let observer = null

onMounted(() => {
  isDark.value = document.body.classList.contains('dark-mode')
  observer = new MutationObserver(() => {
    isDark.value = document.body.classList.contains('dark-mode')
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
  
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
  if (observer) observer.disconnect()
})
const techList = [
   {
    name: 'Visual Paradigm',
    desc: 'Visual modeling & design',
    src: visual_paradigm,
    w: 30,
    h: 28,
    progress: 100,
  },
  {
    name: 'Trello',
    desc: 'Project management & collaboration',
    src: trello,
    w: 30,
    h: 28,
    progress: 90,
  },
  {
    name: 'Vue.js',
    desc: 'SPA & front-end architecture',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
    w: 30,
    h: 28,
    progress: 85,
  },
  {
    name: 'Flask',
    desc: 'API & backend development',
    src: 'https://hackersandslackers-cdn.storage.googleapis.com/2024/09/Flask_Series.png',
    w: 38,
    h: 28,
    progress: 75,
  },
   {
    name: 'Django',
    desc: 'API & backend development',
    src: 'https://www.svgrepo.com/show/353657/django-icon.svg',
    w: 38,
    h: 28,
    progress: 70,
  },
  {
    name: 'MySQL',
    desc: 'Database management',
    src: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png',
    srcDark: light_sql,
    w: 40,
    h: 28,
    progress: 80,
  },
  {
    name: 'Adobe Photoshop',
    desc: 'UI assets & visual editing',
    src: tech3,
    w: 29,
    h: 28,
    progress: 80,
  },
  {
    name: 'Laravel',
    desc: 'API & backend development',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png',
    w: 29,
    h: 28,
    progress: 88,
  },
  {
    name: 'Tailwind',
    desc: 'Responsive UI components',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042',
    w: 35,
    h: 28,
    progress: 67,
  },
  {
    name: 'Bootstrap',
    desc: 'Responsive UI components',
    src: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png',
    w: 35,
    h: 28,
    progress: 100,
  },
]
</script>
