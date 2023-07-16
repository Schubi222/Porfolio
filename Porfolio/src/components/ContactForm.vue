<template>
  <div class="Contact-Form-Wrapper">
    <h1 class="Contact-Form-Wrapper-heading">Want to contact me?</h1>
    <form action="https://formspree.io/f/mqkvkyrk" method="POST" class="Contact-Form-Wrapper__form">
      <input type="text" name="name" placeholder="Your Name" class="Contact-Form-Wrapper__form-input Contact-Form-Wrapper__form-name" required>
      <input type="email" name="email" placeholder="Your Email Address" class="Contact-Form-Wrapper__form-input Contact-Form-Wrapper__form-email" required>
      <textarea name="message" placeholder="Your Message" class="Contact-Form-Wrapper__form-textarea" required></textarea>
      <input type="hidden" name="_next" value="/">
      <button type="submit" class="Contact-Form-Wrapper__form-submit btn noSelect">Contact Me</button>
    </form>
  </div>
</template>

<script setup>

</script>


<style scoped>
@import "@/assets/ContactForm.css";
</style>