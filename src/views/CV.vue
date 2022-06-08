<script setup>
  import BasicInfo from '../components/BasicInfo.vue'
  import Employment from '../components/Employment.vue'
  import Education from '../components/Education.vue'
  import SkillSet from '../components/SkillSet.vue'
</script>

<template>
  <div>
    <div class="no-print">
      <div class="p__locale_selector">
        <input type="radio" id="en" name="locale" value="en" @change="setLocale('en')">
        <label for="en" class="p__flag" :class="{ active: locale == 'en' }"> en </label>
        <input type="radio" id="ja" name="locale" value="ja" @change="setLocale('ja')">
        <label for="ja" class="p__flag" :class="{ active: locale == 'ja' }"> ja </label>
      </div>
    </div>

    <div class="document">
      <div class="page">
        <BasicInfo></BasicInfo>
        <h2> {{$t("record")}} </h2>
        <Employment></Employment>
      </div>
      <div class="page">
        <Education></Education>
        <SkillSet></SkillSet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  methods: {
    setLocale(e) {
      this.$i18n.locale = e
    }
  }
}
</script>