<template>
  <div class="Experience-Entry-Wrapper">
    <div class="Experience-Entry-Wrapper__side-header">{{ timeline }}</div>
    <div class="Experience-Entry-Wrapper__body">
      <div class="Experience-Entry-Wrapper__body-heading">{{ heading }}</div>
      <div class="Experience-Entry-Wrapper__body-subheading">{{ sub_heading }}</div>
      <div class="Experience-Entry-Wrapper__body-text">{{text}}</div>
      <div class="Experience-Entry-Wrapper__body-tags">
        <div class="Experience-Entry-Wrapper__body-tags-tag" v-for="tag in tags" :key="tag">{{tag}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const props = defineProps(['entry'])
  const timeline = ref(props.entry.timeline)
  const heading = ref(props.entry.heading)
  const sub_heading = ref(props.entry.sub_heading)
  const text = ref(props.entry.text)
  const tags = ref(props.entry.tags)


</script>

<style scoped>
@import "@/assets/ExperienceEntry.css";
@import "@/assets/aboutview.css";

</style>