<template>
<div>
  <h1> {{basic_info.name}} </h1>
  <div class="flexbox -nogap">
  <i class="bi-envelope"></i>
  <a class="u-ml5" :href="'mailto:'+ basic_info.email"> {{basic_info.email}} </a>
  <i class="bi-telephone-fill u-ml10"></i>
  <a class="u-ml5" :href="'tel:' + basic_info.phone">{{basic_info.phone}}</a>
  <i class="bi-github u-ml10"></i>
  <a class="u-ml5" :href="'https://www.github.com/' + basic_info.github">github.com/{{basic_info.github}}</a>
  <i class="bi-link-45deg u-ml10"></i>
  <a class="u-ml5" :href="'https://' + basic_info.githubio + '.github.io'">{{basic_info.githubio}}.github.io</a>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      basic_info: {}
    }
  },
  beforeCreate(){
    import(`../json/${this.$i18n.locale}/basic_info.json`)
    .then( (e) => {this.basic_info = e.default} )
  }
}
</script>