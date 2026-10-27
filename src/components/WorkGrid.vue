<template>
  <div id="work" class="section-work flat-spacing">
    <div class="sect-tag text-caption fw-medium">
      <i class="icon icon-high-light" aria-hidden="true"></i>
      Work Highlights
    </div>
    <div class="work-list element-sticky" :aria-busy="loading">
      <div v-if="loading" class="text-center text-white-72" role="status">Loading works...</div>
      <div v-else-if="error && !works.length" class="text-center text-danger" role="alert">
        Error loading works: {{ error }}
      </div>
      <div
        v-else
        v-for="(work, index) in works"
        :key="work.id || index"
        class="sticky-item"
      >
        <article class="wg-work work-card" :class="{ 'is-expanded': work.isExpanded }">
          <div class="work-image" :class="{ 'is-ready': work.imageReady }">
            <img
              loading="lazy"
              decoding="async"
              width="900"
              height="506"
              :src="work.displaySrc || work.images1"
              :alt="work.title || 'Work Image'"
              @load="onWorkImageLoad(work)"
              @error="onWorkImageLoad(work)"
            >
          </div>
          <div class="wrap">
            <div class="work-content">
              <div class="w-image" :class="{ 'is-ready': work.imageReady }" aria-hidden="true">
                <img
                  @load="onWorkImageLoad(work)"
                  loading="lazy"
                  decoding="async"
                  width="468"
                  height="856"
                  :src="work.displaySrc || work.images1"
                  alt=""
                >
              </div>
              <div class="content">
                <div class="content-top">
                  <div class="w-logo">
                    <img
                      class="image-switch"
                      loading="lazy"
                      width="40"
                      height="40"
                      :src="logoLight"
                      :data-light="logoLight"
                      :data-dark="logoDark"
                      alt=""
                    >
                  </div>
                  <h4 class="w-title letter-space--2 text-white-72">
                    {{ work.title || 'Project Name' }}
                  </h4>
                  <p
                    class="w-desc text-white-56 text-body-3"
                    :class="{ 'is-expanded': work.isExpanded }"
                  >
                    {{ work.description_proyek || 'No description available.' }}
                  </p>
                  <button
                    v-if="needsExpand(work)"
                    type="button"
                    class="read-more-btn text-white-72 fw-medium"
                    :aria-expanded="!!work.isExpanded"
                    @click="toggleExpand(work)"
                  >
                    {{ work.isExpanded ? 'Show Less' : 'Read More' }}
                  </button>
                  <div class="w-highlight">
                    <div class="box-high">
                      <p class="text-body-3 text-white-56">Year</p>
                      <p class="text-body-1 text-white-72">{{ formatYear(work.date) }}</p>
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
                    <a
                      v-if="hasLink(work)"
                      :href="work.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="tf-btn-action style-white"
                    >
                      <span class="ic-wrap" aria-hidden="true"><i class="icon icon-arrow-right-top"></i></span>
                      <span class="text text-body-3 letter-space--05 fw-medium">Link</span>
                      <span class="ic-wrap" aria-hidden="true"><i class="icon icon-arrow-right-top"></i></span>
                    </a>
                    <span v-else class="text-white-40 text-body-3">Portfolio highlight</span>
                    <p class="text-white-40">
                      <span class="text-white-72">{{ String(index + 1).padStart(2, '0') }}</span>
                      / {{ String(works.length).padStart(2, '0') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import logoDark from '../assets/images/logo/dark.png'
import logoLight from '../assets/images/logo/light.png'
import { resolveCachedImages } from '../utils/imageCache'

const DESC_CLAMP_CHARS = 160

const works = ref([])
const loading = ref(true)
const error = ref(null)

const formatYear = (value) => {
  if (!value) return ''
  const match = String(value).match(/^\d{4}/)
  if (match) return match[0]
  const d = new Date(value)
  return isNaN(d.getTime()) ? '' : String(d.getUTCFullYear())
}

const needsExpand = (work) =>
  (work.description_proyek || 'No description available.').length > DESC_CLAMP_CHARS

const toggleExpand = (work) => {
  work.isExpanded = !work.isExpanded
  nextTick(() => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh()
  })
}

const hasLink = (work) => {
  const link = (work.link || '').trim()
  return Boolean(link && link !== '#' && !link.startsWith('javascript:'))
}

const withExpandState = (items) =>
  items.map((item) => ({
    ...item,
    isExpanded: false,
    imageReady: false,
    displaySrc: item.images1 || '',
  }))

let imageRefreshTimer = null
const scheduleImageRefresh = () => {
  // Debounce — many work images loading must not thrash ScrollTrigger mid-scroll
  if (imageRefreshTimer) clearTimeout(imageRefreshTimer)
  imageRefreshTimer = setTimeout(() => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh()
  }, 250)
}

const onWorkImageLoad = (work) => {
  if (work && !work.imageReady) work.imageReady = true
  scheduleImageRefresh()
}

const hydrateImageCache = async (items) => {
  const map = await resolveCachedImages(items.map((w) => w.images1).filter(Boolean))
  items.forEach((work) => {
    const cached = map[work.images1]
    if (cached) work.displaySrc = cached
  })
}

const signalReady = () => {
  window.isDataLoaded = true
  if (window.hidePreloader) window.hidePreloader()
  nextTick(() => {
    // Force once after portfolio DOM exists — soft refresh elsewhere
    if (window.refreshAnimations) window.refreshAnimations(true)
    if (window.applyImageSwitch) window.applyImageSwitch()
  })
}

const fetchData = async () => {
  try {
    const apiKey = import.meta.env.VITE_QUANTUM_PORTFOLIO_API_KEY
    const apiUrl = import.meta.env.DEV
      ? '/api-proxy/portfolios'
      : `https://quantumitco.com/api/portfolios?api_key=${apiKey}`

    const response = await fetch(apiUrl)
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') === -1) {
      const text = await response.text()
      if (text.includes('<!doctype html>') || text.includes('<html')) {
        throw new Error(
          'Received HTML instead of JSON. The proxy might not be configured correctly. Please restart your dev/preview server.'
        )
      }
      throw new Error(`Expected JSON but received ${contentType}`)
    }

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    const data = await response.json()
    const remote = Array.isArray(data) ? data : (data.data || [])
    const prepared = withExpandState(remote)
    works.value = prepared
    // Persist remote images in Cache API so revisit / scroll is instant
    hydrateImageCache(prepared).catch(() => {})
  } catch (e) {
    console.error('Failed to fetch portfolios:', e)
    error.value = e.message
    works.value = []
  } finally {
    loading.value = false
    signalReady()
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.work-card :deep(.w-title) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  min-height: 2.4em;
  text-wrap: balance;
}

.work-card :deep(.w-desc) {
  line-height: 1.6;
  margin-bottom: 8px;
}

/* Collapsed = fixed 4 lines so every card matches */
.work-card :deep(.w-desc:not(.is-expanded)) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
  min-height: calc(1.6em * 4);
  max-height: calc(1.6em * 4);
}

.work-card :deep(.w-desc.is-expanded) {
  display: block;
  min-height: 0;
  max-height: none;
}

.read-more-btn {
  text-decoration: underline;
  font-size: 14px;
  line-height: 1.2;
  min-height: 44px;
  padding: 10px 0;
  margin: 0 0 8px;
  display: inline-flex;
  align-items: center;
  background: none;
  border: 0;
  cursor: pointer;
}

.read-more-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.72);
  outline-offset: 2px;
}

@media (min-width: 1200px) {
  .work-card :deep(.w-title) {
    min-height: 0;
    -webkit-line-clamp: unset;
    line-clamp: unset;
    display: block;
  }

  .work-card :deep(.w-desc:not(.is-expanded)) {
    min-height: 0;
    max-height: none;
  }
}

.work-card :deep(.work-image),
.work-card :deep(.w-image) {
  background: color-mix(in srgb, #fff 8%, transparent);
}

.work-card :deep(.work-image img),
.work-card :deep(.w-image img) {
  opacity: 0;
  transition: opacity 0.28s ease;
}

.work-card :deep(.work-image.is-ready img),
.work-card :deep(.w-image.is-ready img) {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .work-card :deep(.wrap) {
    transition: none !important;
  }

  .work-card :deep(.work-image img),
  .work-card :deep(.w-image img) {
    opacity: 1;
    transition: none;
  }
}
</style>
