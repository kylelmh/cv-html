<template>
<div class="p__section">
  <h3> {{$t("employment")}} </h3>
  <div class="p__job" v-for="(v) in employment.data">
    <h4> {{v.name}}</h4>
    <div> {{v.position}} - {{v.status}} </div>
    <div class="p__descriptor u-mb10"> {{v.start}} - {{v.end}} </div>
    <div class="p__basic_info">
      <div>{{$t("work_description")}}: </div>
      <ul>
        <li v-for="(point) in v.description">
          {{point}}
        </li>
      </ul>
      <template v-if="v.examples">
        <div>{{$t("examples")}}: </div>
        <ul>
          <li v-for="(example) in v.examples">
            {{example}}
          </li>
        </ul>
      </template>
      <template v-if="v.skills">
        <div class="p__cell-center">{{$t("skills")}}: </div>
        <ul>
          <li class="p__skill_tag" v-for="(skill) in v.skills">
            {{skill}}
          </li>
        </ul>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      employment: {}
    }
  },
  beforeCreate(){
    import(`../json/${this.$i18n.locale}/employment.json`)
    .then( (e) => {this.employment = e.default} )
  },
  beforeUpdate(){
    import(`../json/${this.$i18n.locale}/employment.json`)
    .then( (e) => {this.employment = e.default} )
  }
}
</script>