<template>
  <div id="service" class="section-service flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-service"></i>
      Services
    </div>
    <div id="accordion-service" class="service-accordion">
      <template v-for="(service, index) in services" :key="service.id">
        <div class="service-accordion_item effectFade fadeUp no-div" role="presentation">
          <div 
            class="accordion-action" 
            :class="{ 'collapsed': index !== 0 }"
            :data-bs-target="`#${service.id}`" 
            role="button" 
            data-bs-toggle="collapse" 
            :aria-controls="service.id" 
            :aria-expanded="index === 0 ? 'true' : 'false'"
          >
            <h4 class="text letter-space--2 text-black-72">{{ service.title }}</h4>
            <div class="ic-wrap"><span class="ic-accordion-custom"></span></div>
          </div>
          <div 
            :id="service.id" 
            class="collapse" 
            :class="{ 'show': index === 0 }"
            data-bs-parent="#accordion-service"
          >
            <div class="accordion-content">
              <div class="tf-grid-layout sm-col-2">
                <div class="service-image" v-for="(img, imgIndex) in service.images" :key="imgIndex">
                  <div class="wrap_image">
                    <img width="340" height="206" :src="img" alt="Image">
                  </div>
                </div>
              </div>
              <div class="service-tag">
                <a href="#" class="tag-item text-body-3 fw-medium text-black-72 link" v-for="(tag, tagIndex) in service.tags" :key="tagIndex">{{ tag }}</a>
              </div>
              <p class="service-desc text-black-56">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
        <div v-if="index < services.length - 1" class="br-line effectFade fadeUp no-div"></div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUpdated, nextTick } from 'vue'
const service1 = 'https://wp-media.cloudairy.com/template/wp-content/uploads/2025/02/01053446/Kubernetes-Architecture-Thumbnail-3.png'
const service2 = 'https://img.freepik.com/free-vector/infographic-dashboard-user-panel_52683-30026.jpg?semt=ais_hybrid&w=740&q=80'
const service3 = 'https://img.freepik.com/free-photo/business-people-are-brainstorming_53876-137640.jpg?semt=ais_hybrid&w=740&q=80'
const service4 = 'https://wallpapers.com/images/featured/project-management-wfbuewoquiigeuht.jpg'
const service5 = 'https://i.pinimg.com/1200x/51/01/63/510163345be6f7368beb0c4c9246ed6c.jpg'
const service6 = 'https://assets.bosch.com/media/global/research/research_fields/digitalization_and_connectivity/software_development/software-development-source-code.jpg'

const services = [
  {
    id: 'service-1',
    title: 'System Analysis & Design',
    images: [service1, service2],
    tags: ['Scalable Architecture', 'Business & System Flow', 'Requirement Analysis'],
    description: 'I analyze your business and system flows to design apps that are ready to grow. I turn your requirements into solid, scalable systems.'
  },
  {
    id: 'service-2',
    title: 'Project Management',
    images: [service3, service4],
    tags: ['Trello', 'Agile & Daily Meetings', 'FSD & User Stories'],
    description: 'I organize projects using Trello by breaking down FSDs and User Stories into clear tasks. I lead daily meetings to keep the team aligned and ensure smooth delivery.'
  },
  {
    id: 'service-3',
    title: 'Software Development',
    images: [service5, service6],
    tags: ['Full-Stack Development', 'User-Friendly UI', 'Business-Driven Backend'],
    description: 'I build applications using the tech stack defined in the FSD. I focus on creating user-friendly interfaces and robust backends that align perfectly with your business needs.'
  }
]

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
