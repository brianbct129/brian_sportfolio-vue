<template>
  <div id="education" class="section-education-experience flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-edu" aria-hidden="true"></i>
      Education & Experience
    </div>
    <div class="timeline scroll-down">
      <div class="timeline-line">
        <div class="prg-line"></div>
      </div>
      <div
        class="timeline-item effectFade fadeUp no-div"
        v-for="(item, idx) in timelineItems"
        :key="idx"
      >
        <p class="timeline-date text-black-56">{{ item.date }}</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div
            class="icon timeline-logo"
            :class="{ 'is-loaded': loadedIcons[idx] }"
            :style="{ '--logo-w': item.icon.w + 'px', '--logo-h': item.icon.h + 'px' }"
          >
            <img
              class="image-switch"
              :data-dark="item.icon.dark"
              :data-light="item.icon.light"
              :src="item.icon.light"
              :width="item.icon.w"
              :height="item.icon.h"
              :loading="idx < 3 ? 'eager' : 'lazy'"
              :fetchpriority="idx === 0 ? 'high' : 'auto'"
              decoding="async"
              alt=""
              aria-hidden="true"
              @load="markIconLoaded(idx)"
              @error="markIconLoaded(idx)"
            >
          </div>
          <template v-for="(content, cIdx) in item.contents" :key="cIdx">
            <p class="timeline-role fw-medium text-black-72" :class="{ 'mt-4': cIdx > 0 }">{{ content.role }}</p>
            <template v-if="content.points && content.points.length">
              <ul class="timeline-desc list-style text-body-3 text-black-56">
                <li class="my-3" v-for="(pt, pi) in content.points" :key="pi">{{ pt }}</li>
              </ul>
            </template>
            <template v-else>
              <p class="timeline-desc text-body-3 text-black-56">
                {{ content.desc }}
              </p>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import dark_apu from '../assets/images/item/dark_apu.png'
import light_apu from '../assets/images/item/light_apu.png'
import light_dbs from '../assets/images/item/light_dbs.png'
import dark_dbs from '../assets/images/item/dark_dbs.png'
import light_binus from '../assets/images/item/light_binus.png'
import dark_binus from '../assets/images/item/dark_binus.png'
import light_qf from '../assets/images/item/light_qf.png'
import dark_qf from '../assets/images/item/dark_qf.png'
import smartindo from '../assets/images/item/smartindo.png'
import jinmu from '../assets/images/item/jinmu.png'
import sapta from '../assets/images/item/sapta.png'
import { warmImage } from '../utils/imageCache'

const timelineItems = [
  {
    date: '2026 - Present',
    icon: { light: smartindo, dark: smartindo, w: 200, h: 120 },
    contents: [
      {
        role: 'System Architect — PT Smartindo Integrasi System',
        points: [
          'Lead end-to-end integration architecture for enterprise systems including HRIS, Core Sales & Purchase, Accounting & Finance, CRM, Project Management, Helpdesk, Ticketing, and AI Integration modules.',
          'Define system integration standards and ensure interoperability across platforms to support business scalability and operational continuity.',
          'Collaborate with C-level stakeholders to align technology roadmaps with organizational growth objectives.',
        ],
      },
      {
        role: 'System Analyst — Contract (Dec 2024 – Apr 2026)',
        points: [
          'Analyzed and documented business processes, translating complex requirements into clear system specifications for development teams.',
          'Enhanced Version 2 frontend UX and reviewed frontend/backend code for quality, scalability, and performance.',
          'Facilitated Agile ceremonies, prioritized development tasks, and optimized database queries for efficient large-dataset rendering.',
        ],
      },
    ],
  },
  {
    date: '2026 - Present',
    icon: { light: jinmu, dark: jinmu, w: 200, h: 120 },
    contents: [
      {
        role: 'Software Engineer — Jin Mu Group',
        points: [
          'Developed JINMU POS Resto Cashier system and Supply Chain Restaurant Management platform from scratch using Laravel and Vue.js.',
          'Architected a full-stack solution covering order management, inventory control, and real-time reporting for restaurant operations.',
        ],
      },
    ],
  },
  {
    date: '2025 - Present',
    icon: { light: sapta, dark: sapta, w: 200, h: 120 },
    contents: [
      {
        role: 'System Architect — Sapta Tunas Teknologi',
        points: [
          'Design and oversee system architecture for enterprise technology solutions, ensuring alignment with business strategy and scalability requirements.',
        ],
      },
    ],
  },
  {
    date: '2023 - 2025',
    icon: { light: dark_qf, dark: light_qf, w: 200, h: 120 },
    contents: [
      {
        role: 'IT Tech Consultant — Full Time (Nov 2023 – Feb 2025)',
        points: [
          'Conduct in-depth analysis of clients’ IT systems and business requirements to design and implement solutions that enhance efficiency and support strategic objectives.',
          'Lead and manage IT projects end-to-end—ensuring on-time, on-budget delivery; coordinate stakeholders, configure systems, and provide training and support.',
          'Monitor and evaluate solution performance, provide ongoing improvements, and leverage emerging technologies to drive growth and competitiveness.',
        ],
      },
      {
        role: 'Software Engineer — Freelance (Jan 2023 – Present)',
        points: [
          'Engineered and optimized dynamic front-end and server-side components using Node.js, Bootstrap, Vue.js, and Laravel—significantly enhancing responsiveness and reliability.',
          'Spearheaded collaboration with designers, PMs, and developers to gather requirements and design solutions—reducing delivery time by 20% and aligning with user and technical needs.',
          'Wrote clean, maintainable code following best practices; optimized apps for speed and scalability; resolved issues to improve performance and reliability.',
        ],
      },
    ],
  },
  {
    date: '2020 - 2024',
    icon: { light: dark_apu, dark: light_apu, w: 200, h: 120 },
    contents: [
      {
        role: 'IT Business Integration Manager (2022 - 2024)',
        desc:
          'Oversaw the alignment of technology solutions with business strategies, using tools like Git and PHP to enhance efficiency and support organizational goals, resulting in improved operational success. Led cross-functional projects integrating IT systems, using Trello and Google Drive to improve communication between IT and other departments, increasing project success by 20%.',
      },
      {
        role: 'IT Business Analyst (2020 - 2022)',
        desc:
          'I analyze business processes, identify technology needs, and implement systems that support business operations. My responsibilities include leading teams, managing budgets, and ensuring that all IT projects are delivered on time and within scope, thereby contributing to the overall success of the organization.',
      },
    ],
  },
  {
    date: '2019 - 2020',
    icon: { light: light_dbs, dark: dark_dbs, w: 120, h: 120 },
    contents: [
      {
        role: 'IT Applications Support',
        desc:
          'During my year-long internship with the IT Apps Support team at DBS, I learned about User Acceptance Testing (UAT), maintaining applications to ensure they run smoothly on both production and UAT servers, and gained an understanding of various development methodologies, including Agile and Waterfall. Additionally, I communicated with users regarding application-related issues and requirements.',
      },
    ],
  },
  {
    date: '2016 - 2020',
    icon: { light: dark_binus, dark: light_binus, w: 120, h: 120 },
    contents: [
      {
        role: 'SIS Undergraduate (B.Sc)',
        desc:
          'Earned a Bachelor’s degree in Information Systems from BINUS University in 2020 with a GPA of 3.14. This program equipped me with a deep understanding of the software development lifecycle, systems analysis, and project management. It was here that I developed the analytical mindset and technical proficiency required to bridge the gap between complex business requirements and scalable software solutions.',
      },
    ],
  },
]

const loadedIcons = reactive({})

const markIconLoaded = (idx) => {
  loadedIcons[idx] = true
}

onMounted(() => {
  // Prefetch light + dark variants so theme switch / scroll reveal doesn't wait on decode
  const urls = new Set()
  timelineItems.forEach((item) => {
    urls.add(item.icon.light)
    urls.add(item.icon.dark)
  })
  urls.forEach(warmImage)
})
</script>
<style scoped>
.timeline-logo {
  position: relative;
  width: min(100%, var(--logo-w, 200px));
  aspect-ratio: var(--logo-w, 200) / var(--logo-h, 120);
  max-height: var(--logo-h, 120px);
  background: color-mix(in srgb, var(--black, #111) 6%, transparent);
  border-radius: 4px;
  overflow: hidden;
}

.timeline-logo img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.timeline-logo.is-loaded img {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-logo img {
    opacity: 1;
    transition: none;
  }
}
</style>
