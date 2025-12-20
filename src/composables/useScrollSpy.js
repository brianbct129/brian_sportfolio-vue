import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollSpy() {
  const activeSection = ref('')
  let observer = null

  // List of section IDs to observe
  const sections = [
    'home',
    'about',
    'education',
    'work',
    'service',
    'tech',
    'testimonial',
    'contact'
  ]

  onMounted(() => {
    const observerOptions = {
      root: null,
      // Adjust rootMargin to control when a section is considered "active"
      // e.g., "-20% 0px -70% 0px" means the detection area is a strip in the viewport
      rootMargin: '-10% 0px -80% 0px', 
      threshold: 0
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    activeSection
  }
}
