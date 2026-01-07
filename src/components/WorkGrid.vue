<template>
  <div id="work" class="section-work flat-spacing">
    <div class="sect-tag text-caption fw-medium">
      <i class="icon icon-high-light"></i>
      Work Highlights
    </div>
    <div class="work-list element-sticky">
      <div v-if="loading" class="text-center text-white-72">Loading works...</div>
      <div v-else-if="error" class="text-center text-danger">Error loading works: {{ error }}</div>
      <div v-else v-for="(work, index) in works" :key="work.id || index" class="sticky-item">
        <div class="wg-work">
          <div class="work-image">
            <img loading="lazy" width="900" height="427" :src="work.images1" :alt="work.title || 'Work Image'">
          </div>
          <div class="wrap">
            <div class="work-content">
              <div class="w-image">
                <img @load="handleImageLoad" loading="lazy" width="468" height="856" :src="work.images1" :alt="work.title || 'Work Image'">
              </div>
              <div class="content">
                <div class="content-top">
                  <div class="w-logo">
                    <img class="image-switch" loading="lazy" width="40" height="40" :src="logoLight" :data-light="logoLight" :data-dark="logoDark" alt="Image">
                  </div>
                  <h4 class="w-title letter-space--2 text-white-72">{{ work.title || 'Project Name' }}</h4>
                  <p class="w-desc text-white-56 text-body-3">
                    <span v-if="!work.isExpanded">
                      {{ (work.description_proyek || 'No description available.').length > 300 ? (work.description_proyek || 'No description available.').substring(0, 300) + '...' : (work.description_proyek || 'No description available.') }}
                    </span>
                    <span v-else>
                      {{ work.description_proyek || 'No description available.' }}
                    </span>
                    <a 
                      href="#"
                      v-if="(work.description_proyek || 'No description available.').length > 300" 
                      @click.prevent="work.isExpanded = !work.isExpanded" 
                      class="read-more-btn text-white-72 fw-medium ms-2" 
                      style="text-decoration: underline; font-size: 14px; margin-top: 4px; display: inline-block;"
                    >
                      {{ work.isExpanded ? 'Show Less' : 'Read More' }}
                    </a>
                  </p>
                  <div class="w-highlight">
                    <div class="box-high">
                      <p class="text-body-3 text-white-56">Year</p>
                      <p class="text-body-1 text-white-72">{{ work.year || '2024' }}</p>
                    </div>
                    <div class="box-high">
                      <p class="text-body-3 text-white-56">Kota</p>
                      <p class="text-body-1 text-white-72">{{ work.kota || 'City' }}</p>
                    </div>
                  </div>
                  <div class="w-tag-list">
                    <div class="tag">
                        <span class="text-body-3 fw-medium text-white-72">{{ work.category_name }}</span>
                    </div>
                  </div>
                </div>
                <div class="content-bottom">
                  <div class="br-line"></div>
                  <div class="group-action">
                    <a :href="work.link" target="_blank" class="tf-btn-action style-white">
                      <span class="ic-wrap"><i class="icon icon-arrow-right-top"></i></span>
                      <span class="text text-body-3 letter-space--05 fw-medium">Link</span>
                      <span class="ic-wrap"><i class="icon icon-arrow-right-top"></i></span>
                    </a>
                    <p class="text-white-40"><span class="text-white-72">{{ String(index + 1).padStart(2, '0') }}</span> / {{ String(works.length).padStart(2, '0') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUpdated, nextTick } from 'vue'
import logoDark from '../assets/images/logo/dark.png'
import logoLight from '../assets/images/logo/light.png'
const works = ref([])
const loading = ref(true)
const error = ref(null)

const handleImageLoad = () => {
  if (window.ScrollTrigger) {
    window.ScrollTrigger.refresh()
  }
}

const fetchData = async () => {
  try {
    // Use the proxy endpoint instead of direct URL
    const response = await fetch('/api-proxy/portfolios')
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") === -1) {
      const text = await response.text();
      // Check if it's the HTML fallback (likely index.html)
      if (text.includes("<!doctype html>") || text.includes("<html")) {
        throw new Error("Received HTML instead of JSON. The proxy might not be configured correctly. Please restart your dev/preview server.");
      }
      throw new Error(`Expected JSON but received ${contentType}`);
    }

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    // Handle likely API response structures (array or object with data property)
    works.value = Array.isArray(data) ? data : (data.data || [])
  } catch (e) {
    console.error("Failed to fetch portfolios:", e)
    error.value = e.message
  } finally {
    loading.value = false
    // Signal that data is loaded
    window.isDataLoaded = true
    // Try to hide preloader if the function is already available
    if (window.hidePreloader) window.hidePreloader()

    // Trigger animation refresh after DOM update
    nextTick(() => {
        if (window.refreshAnimations) window.refreshAnimations()
        if (window.applyImageSwitch) window.applyImageSwitch()
    })
  }
}

onMounted(() => {
  fetchData()
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
