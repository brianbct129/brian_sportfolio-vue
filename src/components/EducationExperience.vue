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
      <div class="timeline-item effectFade fadeUp no-div" v-for="(item, idx) in timelineItems" :key="idx">
        <p class="timeline-date text-black-56">{{ item.date }}</p>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="icon">
            <img
              class="image-switch"
              :data-dark="item.icon.dark"
              :data-light="item.icon.light"
              :src="item.icon.light"
              :width="item.icon.w"
              :height="item.icon.h"
              alt="Image"
            >
          </div>
          <template v-for="(content, cIdx) in item.contents" :key="cIdx">
            <p class="timeline-role fw-medium text-black-72" :class="{ 'mt-4': cIdx > 0 }">{{ content.role }}</p>
            <p class="timeline-desc text-body-3 text-black-56">
              {{ content.desc }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import logo3 from '../assets/images/item/dark_apu.png'
import logo2 from '../assets/images/item/light_apu.png'
import edu2 from '../assets/images/item/light_dbs.png'
import edu2Dark from '../assets/images/item/dark_dbs.png'
import edu3 from '../assets/images/item/light_binus.png'
import edu3Dark from '../assets/images/item/dark_binus.png'
const timelineItems = [

  {
    date: '2020 - 2024',
    icon: { light: logo3, dark: logo2, w: 200, h: 120 },
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
    icon: { light: edu2, dark: edu2Dark, w: 120, h: 120 },
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
    icon: { light: edu3Dark, dark: edu3, w: 120, h: 120 },
    contents: [
      {
        role: 'SIS Undergraduate (B.Sc)',
        desc:
          'Earned a Bachelor’s degree in Information Systems from BINUS University in 2020 with a GPA of 3.14. This program equipped me with a deep understanding of the software development lifecycle, systems analysis, and project management. It was here that I developed the analytical mindset and technical proficiency required to bridge the gap between complex business requirements and scalable software solutions.',
      },
    ],
  },
]
</script>
<style scoped>
</style>
