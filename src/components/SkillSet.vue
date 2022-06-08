<script setup>
import SkillCard from "./SkillCard.vue";
</script>

<template>
<div class="p__section">
  <h2> {{$t("skills")}} </h2>
  <div class="p__section u-mb10" v-if="skills.languages">
    <h4 class="u-mb10"> {{$t("languages")}} </h4>
    <div class="p__skills">
      <div class="p__skill_tag" v-for="(lang) in skills.languages">
      <div>
        {{lang.name}}: 
      </div> 
      <div>
        {{lang.description}}
      </div>
      <div v-if="lang.cert">
        {{lang.cert}}
      </div>
      </div>
    </div>
  </div>
  <template v-if="skills.programming">
    <h4 class="u-mb10"> {{$t("planguages")}} </h4>
    <div class="p__skills u-mb10">
      <SkillCard :lang=lang v-for="(lang) in skills.programming"></SkillCard>
    </div>
    <div class="p__skill_levels flexbox u-ml10" v-for="(v,k) in levels">
      <div class="p__cell-center">
        <svg viewBox="15 0 6 6" xmlns="http://www.w3.org/2000/svg">
        <circle v-for="(i) in k*1" :cx="3+i*5" cy="3" r="1.5" stroke="black"/>
        <circle v-for="(i) in 5-k" :cx="3+i*5+k*5" cy="3" r="1.5" fill="none" stroke="black"/>
        </svg>
      </div>

      <p>
        {{v}}
      </p>
    </div>
  </template>
</div>
</template>

<script>
export default {
  data(){
    return{
      skills: {},
      levels: {}
    }
  },
  beforeCreate(){
    import(`../json/${this.$i18n.locale}/skills.json`)
    .then( (e) => {this.skills = e.default} )
    import(`../json/${this.$i18n.locale}/levels.json`)
    .then( (e) => {this.levels = e.default} )
  },
  beforeUpdate(){
    import(`../json/${this.$i18n.locale}/skills.json`)
    .then( (e) => {this.skills = e.default} )
    import(`../json/${this.$i18n.locale}/levels.json`)
    .then( (e) => {this.levels = e.default} )
  }
}
</script>