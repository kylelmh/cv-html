<template>
<div>
  <h1> {{basic_info.name}} </h1>
  <div class="flexbox">
    <div>
      <i class="bi-envelope -inline"></i>
      <a class="u-ml5 -inline" :href="'mailto:'+ basic_info.email"> {{basic_info.email}} </a>
    </div>
    <div>
      <i class="bi-telephone-fill"></i>
      <a class="u-ml5" :href="'tel:' + basic_info.phone">{{basic_info.phone}}</a>
    </div>
    <div>
     <i class="bi-github"></i>
     <a class="u-ml5" :href="'https://www.github.com/' + basic_info.github">github.com/{{basic_info.github}}</a>
    </div>
    <div>
      <img src="../assets/graphql.svg" style="width: 12px">
      <a class="u-ml5" href="https://api.kylelmh.dev/#query=%0Aquery%20a%20%7B%0A%20%20cvOf(name%3A%20%22Lee%22)%7B%0A%20%20%20%20firstName%0A%20%20%7D%0A%7D&operationName=a"> api.kyle.lmh.dev </a> 
    </div>
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