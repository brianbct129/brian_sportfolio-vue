
<script setup>
import { onMounted } from 'vue'
import BodyBackground from './components/BodyBackground.vue'
import OffcanvasColor from './components/OffcanvasColor.vue'
import MobileMenu from './components/MobileMenu.vue'
import SidebarTools from './components/SidebarTools.vue'
import HeaderTime from './components/HeaderTime.vue'
import UserSidebar from './components/UserSidebar.vue'
import IntroSection from './components/IntroSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationExperience from './components/EducationExperience.vue'
import WorkGrid from './components/WorkGrid.vue'
import Services from './components/Services.vue'
import TechStack from './components/TechStack.vue'
import Testimonials from './components/Testimonials.vue'
import ContactForm from './components/ContactForm.vue'
import FooterSection from './components/FooterSection.vue'
onMounted(() => {
  document.querySelectorAll('.effectFade').forEach((el) => {
    el.style.opacity = '1'
  })
})
</script>

<template>
   <!-- <canvas class="cursor-trail d-none d-xl-block" id="trail"></canvas> -->

    <!-- Preload -->
    <div class="preload preload-container bg-dark" id="preload">
        <div class="preload-logo">
            <div class="spinner"></div>
        </div>
    </div>
    <!-- /Preload -->

    <BodyBackground />
    <!-- Btn Open Color -->
    <div class="tf-left-bar">
        <a class="btn-setting-color tf-btn-icon style-2" data-bs-toggle="offcanvas" href="index.html#settingColorMenu"><i class="icon-gear"></i></a>
    </div>
    <!-- /Btn Open Color -->
    <OffcanvasColor />

    <MobileMenu />

    <SidebarTools />

    <div class="overlay-pop"></div>
      <main id="wrapper">
        <HeaderTime />
        <UserSidebar />
        <div class="main-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-xl-8 ms-auto">
                <div class="wrap-container">
                  <IntroSection />
                  <AboutSection />
                  <EducationExperience />
                  <WorkGrid />
                  <Services />
                  <TechStack />
                  <Testimonials />
                  <ContactForm />
                  <FooterSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</template>
