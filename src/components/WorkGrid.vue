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
            <img @load="handleImageLoad" loading="lazy" width="900" height="427" :src="work.images1" :alt="work.title || 'Work Image'">
          </div>
          <div class="wrap">
            <div class="work-content">
              <div class="w-image">
                <img @load="handleImageLoad" loading="lazy" width="468" height="856" :src="work.images1" :alt="work.title || 'Work Image'">
              </div>
              <div class="content">
                <div class="content-top">
                  <div class="w-logo">
                    <img loading="lazy" width="40" height="40" :src="isDark ? logoDark : logoLight" alt="Image">
                  </div>
                  <h4 class="w-title letter-space--2 text-white-72">{{ work.title || 'Project Name' }}</h4>
                  <p class="w-desc text-white-56 text-body-3">
                    {{ work.description_proyek || 'No description available.' }}
                  </p>
                  <div class="w-highlight">
                    <div class="box-high">
                      <p class="text-body-3 text-white-56">Year</p>
                      <p class="text-body-1 text-white-72">{{ work.year || '2024' }}</p>
                    </div>
                    <div class="box-high">
                      <p class="text-body-3 text-white-56">Role</p>
                      <p class="text-body-1 text-white-72">{{ work.role || 'Lead Product Designer' }}</p>
                    </div>
                  </div>
                  <div class="w-tag-list">
                    <div class="tag" v-for="(tag, tIndex) in (Array.isArray(work.tags) ? work.tags : ['Brand', 'Website'])" :key="tIndex">
                        <span class="text-body-3 fw-medium text-white-72">{{ tag }}</span>
                    </div>
                  </div>
                </div>
                <div class="content-bottom">
                  <div class="br-line"></div>
                  <div class="group-action">
                    <a href="#" class="tf-btn-action style-white">
                      <span class="ic-wrap"><i class="icon icon-arrow-right-top"></i></span>
                      <span class="text text-body-3 letter-space--05 fw-medium">Let’s talk</span>
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
import { ref, onMounted, onUpdated, onBeforeUnmount, nextTick } from 'vue'
import logoDark from '../assets/images/logo/dark.png'
import logoLight from '../assets/images/logo/light.png'

const works = ref([])
const loading = ref(true)
const error = ref(null)
const isDark = ref(false)
let observer = null
let refreshTimeout = null
let isRefreshing = false

// Only refresh calculations (for image loads/resize)
const refreshCalculations = () => {
  if (refreshTimeout) clearTimeout(refreshTimeout)
  refreshTimeout = setTimeout(() => {
    requestAnimationFrame(() => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh()
      }
    })
  }, 20)
}

// Full re-initialization (for data changes/mount)
const initTriggers = () => {
  if (refreshTimeout) clearTimeout(refreshTimeout)
  refreshTimeout = setTimeout(() => {
    requestAnimationFrame(() => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh()
      }
      initScrollTriggers()
    })
  }, 200)
}

// Logic ported from gsapAnimation.js (service function)
const initScrollTriggers = () => {
  if (!window.ScrollTrigger) return

  // Select elements within the component and related sidebar
  const sidebar = document.querySelector(".sidebar-user")
  const worksItems = document.querySelectorAll(".sticky-item")

  if (!sidebar || !worksItems.length) return

  // Clean up existing triggers on these elements to prevent duplication
  const elements = [sidebar, ...Array.from(worksItems)]
  window.ScrollTrigger.getAll().forEach(t => {
      if (elements.includes(t.trigger) || elements.includes(t.pin)) {
          t.kill(true)
      }
  })

  let isClickScrolling = false
  let clickScrollTimer = null

  // Handle anchor clicks to prevent active class jumping
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      isClickScrolling = true
      if (clickScrollTimer) clearTimeout(clickScrollTimer)
      clickScrollTimer = setTimeout(() => {
        isClickScrolling = false
      }, 800)
    })
  })

  // 1. Sidebar Active Trigger
  window.ScrollTrigger.create({
    trigger: worksItems[0],
    start: "top 132px",
    endTrigger: worksItems[worksItems.length - 1],
    end: "bottom 68px",
    onEnter: () => !isClickScrolling && sidebar.classList.add("active"),
    onLeave: () => !isClickScrolling && sidebar.classList.remove("active"),
    onEnterBack: () => !isClickScrolling && sidebar.classList.add("active"),
    onLeaveBack: () => !isClickScrolling && sidebar.classList.remove("active"),
    invalidateOnRefresh: true,
  })

  // 2. Work Items (.wrap) Active Trigger
  worksItems.forEach((work) => {
    const wrap = work.querySelector(".wrap")
    if (!wrap) return

    window.ScrollTrigger.create({
      trigger: work,
      start: "top 132px",
      end: "bottom 68px",
      onEnter: () => {
        if (isClickScrolling) return
        document.querySelectorAll(".wg-work .wrap").forEach((el) => el.classList.remove("active"))
        wrap.classList.add("active")
      },
      onEnterBack: () => {
        if (isClickScrolling) return
        document.querySelectorAll(".wg-work .wrap").forEach((el) => el.classList.remove("active"))
        wrap.classList.add("active")
      },
      onLeave: () => {
        if (isClickScrolling) return
        wrap.classList.remove("active")
      },
      onLeaveBack: () => {
        if (isClickScrolling) return
        wrap.classList.remove("active")
      },
      invalidateOnRefresh: true,
    })
  })
}

const handleImageLoad = () => {
  refreshCalculations()
}

const fetchData = async () => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`https://quantumitco.com/api/portfolios?api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    works.value = Array.isArray(data) ? data : (data.data || [])
  } catch (e) {
    console.error("Failed to fetch portfolios:", e)
    error.value = e.message
  } finally {
    loading.value = false
    nextTick(() => {
        initTriggers()
    })
  }
}

onMounted(() => {
  fetchData()
  
  // Dark mode detection
  isDark.value = document.body.classList.contains('dark-mode')
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const newIsDark = document.body.classList.contains('dark-mode')
        if (isDark.value !== newIsDark) {
          isDark.value = newIsDark
          // No need to refresh ScrollTrigger for color changes
        }
      }
    })
  })
  observer.observe(document.body, { attributes: true })
  
  nextTick(() => {
    initTriggers()
  })
})

onUpdated(() => {
  // We only need to re-init if the DOM structure changed significantly (e.g. works list updated)
  // If just a class changed, we don't need to kill all triggers.
  // But onUpdated fires for any reactive change. 
  // Let's rely on explicit calls in fetchData and nextTick, 
  // or only use refreshCalculations here if needed.
  // nextTick(() => refreshCalculations()) 
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (refreshTimeout) clearTimeout(refreshTimeout)
  // Clean up ScrollTriggers created by this component
  if (window.ScrollTrigger) {
    const sidebar = document.querySelector(".sidebar-user")
    const worksItems = document.querySelectorAll(".sticky-item")
    const elements = [sidebar, ...Array.from(worksItems)]
    window.ScrollTrigger.getAll().forEach(t => {
        if (elements.includes(t.trigger)) {
            t.kill(true)
        }
    })
  }
})
</script>
<style scoped>
</style>