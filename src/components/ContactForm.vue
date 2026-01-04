<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const sendToWhatsApp = () => {
    const phoneNumber = '6289505991562' // Replaced 0 with 62 for international format
    const text = `Hello, my name is ${form.name}.%0AEmail: ${form.email}%0A%0A${form.message}`
    const url = `https://wa.me/${phoneNumber}?text=${text}`
    window.open(url, '_blank')
}
</script>
<template>
    <!-- Contact -->
    <div id="contact" class="section-contact flat-spacing">
        <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
            <i class="icon icon-send"></i>
            Contact
        </div>
        <h4 class="s-title letter-space--2 split-text effect-blur-fade">
            If you have a general or project <br class="d-none d-lg-block">
            enquiry, please drop me an email <br class="d-none d-lg-block">
            or fill the form - available now
        </h4>
        <form class="form-contact" id="contactform" @submit.prevent="sendToWhatsApp">
            <div class="form-content effectFade fadeUp no-div">
                <fieldset class="field-ip">
                    <input type="text" v-model="form.name" name="name" id="name" placeholder="Your Name *" required>
                </fieldset>
                <fieldset class="field-ip">
                    <input type="email" v-model="form.email" name="email" id="email" placeholder="Email Address *" required>
                </fieldset>
                <fieldset class="field-ip">
                    <textarea v-model="form.message" name="message" id="message" placeholder="Project Description"></textarea>
                </fieldset>
            </div>
            <div class="form-action effectFade fadeUp no-div">
                <div class="send-wrap">
                    <button type="submit" class="tf-btn animate-btn animate-dark">
                        <span class="text-body-3">
                            Send via WhatsApp
                        </span>
                    </button>
                </div>
                <a href="mailto:briancavarelthomas@gmail.com" class="text-body-1 link letter-space--2 text-black-72">
                    briancavarelthomas@gmail.com
                </a>
            </div>
        </form>
    </div>
    <!-- /Contact -->
</template>

<style scoped>
.field-ip textarea {
    width: 100%;
    height: 150px;
    padding: 16px 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: transparent;
    font-size: 16px;
    resize: none;
    outline: none;
}
.field-ip textarea:focus {
    border-bottom: 1px solid #000;
}
</style>
