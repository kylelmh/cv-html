<template>
<div class="p__section u-nobreak">
  <h2> {{$t("skills")}} </h2>
  <div class="p__section u-mb10" v-if="skills.languages">
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