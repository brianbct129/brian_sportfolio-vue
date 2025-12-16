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
        <form class="form-contact" id="contactform" action="https://isak-omega.vercel.app/assets/contact/contact-process.php" method="post"
            novalidate="novalidate">
            <div class="form-content effectFade fadeUp no-div">
                <fieldset class="field-ip">
                    <input type="text" name="name" id="name" placeholder="Your Name *" required>
                </fieldset>
                <fieldset class="field-ip">
                    <input type="email" name="email" id="email" placeholder="Email Address *" required>
                </fieldset>
                <fieldset class="field-ip">
                    <input type="text" name="message" id="message" placeholder="Project Description">
                </fieldset>
            </div>
            <div class="form-action effectFade fadeUp no-div">
                <div class="send-wrap">
                    <button type="submit" class="tf-btn animate-btn animate-dark">
                        <span class="text-body-3">
                            Send Message
                        </span>
                    </button>
                </div>
                <a href="index.html#" class="text-body-1 link letter-space--2 text-black-72">
                    hello@isak.design
                </a>
            </div>
        </form>
    </div>
    <!-- /Contact -->
</template>
<script setup>
</script>
<style scoped>
</style>
