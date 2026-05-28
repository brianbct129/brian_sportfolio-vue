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
import visual_paradigm from '../assets/images/skills/visualparadigm.webp'
import trello from '../assets/images/skills/trello.webp'
import vue from '../assets/images/skills/vue.png'
import nodejs from '../assets/images/skills/nodejs.webp'
import flask from '../assets/images/skills/Flask_Series.png'
import django from '../assets/images/skills/django-icon.svg'
import mysql from '../assets/images/skills/sql.png'
import light_sql from '../assets/images/skills/sql.webp'
import photoshop from '../assets/images/skills/photoshop.svg'
import laravel from '../assets/images/skills/Laravel.svg'
import tailwind from '../assets/images/skills/pngwing.com.png'
import bootstrap from '../assets/images/skills/bootstrap-logo-shadow@2x.png'

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
    src: vue,
    w: 30,
    h: 28,
    progress: 85,
  },
   {
    name: 'Node.JS',
    desc: 'Server-side JavaScript runtime',
    src: nodejs,
    w: 50,
    h: 28,
    progress: 75,
  },
  {
    name: 'Flask',
    desc: 'API & backend development',
    src: flask,
    w: 38,
    h: 28,
    progress: 75,
  },
   {
    name: 'Django',
    desc: 'API & backend development',
    src: django,
    w: 38,
    h: 28,
    progress: 70,
  },
  {
    name: 'MySQL',
    desc: 'Database management',
    src: mysql,
    srcDark: light_sql,
    w: 40,
    h: 28,
    progress: 80,
  },
  {
    name: 'Adobe Photoshop',
    desc: 'UI assets & visual editing',
    src: photoshop,
    w: 29,
    h: 28,
    progress: 80,
  },
  {
    name: 'Laravel',
    desc: 'API & backend development',
    src: laravel,
    w: 29,
    h: 28,
    progress: 88,
  },
  {
    name: 'Tailwind',
    desc: 'Responsive UI components',
    src: tailwind,
    w: 35,
    h: 28,
    progress: 67,
  },
  {
    name: 'Bootstrap',
    desc: 'Responsive UI components',
    src: bootstrap,
    w: 35,
    h: 28,
    progress: 100,
  },
]
</script>
