<script setup>
  import BasicInfo from './components/BasicInfo.vue'
  import Employment from './components/Employment.vue'
  import Education from './components/Education.vue'
  import SkillSet from './components/SkillSet.vue'
</script>

<template>
  <div>
    <div class="no-print">
      <div class="p__locale_selector">
        <input type="radio" id="en" v-model="lang" value="en">
        <label for="en" class="p__flag" :class="{ active: lang == 'en' }"> en </label>
        <input type="radio" id="ja" v-model="lang" value="ja">
        <label for="ja" class="p__flag" :class="{ active: lang == 'ja' }"> ja </label>
      </div>
      <div class="bi-printer p__print_btn" v-on:click="print"></div>
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
    lang: {
      get(){
        return this.$i18n.locale
      },
      set(e){
        // console.log(e)
        this.$i18n.locale = e
      }
    }
  },
  methods: {
    print(){
      window.print()
    }
  }
}
</script>