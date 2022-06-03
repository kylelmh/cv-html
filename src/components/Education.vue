<template>
<div class="p__section">
  <h3> {{$t("education")}} </h3>
  <div class="p__job" v-for="(v) in education.data">
    <h4> {{v.name}}</h4>
    <div v-if="v.faculty">
     {{v.faculty}} 
      <span v-if="v.department"> - {{v.department}} </span>
    </div>
    <div class="p__descriptor u-mb10"> {{v.start}} - {{v.end}} </div>
    <div class="p__basic_info">
      <template v-if="v.awards">
        <div class="p__literal">{{$t("awards")}}: </div>
        <div>
          <p v-for="(award) in v.awards">
            {{award}}
          </p>
        </div>
      </template>
      <template v-if="v.research">
        <div class="p__literal">{{$t("research")}}: </div>
        <div> {{v.research}} </div>
      </template>
      <template v-if="v.publications">
        <div class="p__literal">{{$t("publications")}}: </div>
        <div>
          <p v-for="(pub) in v.publications">
            {{pub}}
          </p>
        </div>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      education: {}
    }
  },
  beforeCreate(){
    import(`../json/${this.$i18n.locale}/education.json`)
    .then( (e) => {this.education = e.default} )
  },
  updated(){
    import(`../json/${this.$i18n.locale}/education.json`)
    .then( (e) => {this.education = e.default} )
  }
}
</script>