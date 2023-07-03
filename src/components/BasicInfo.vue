<template>
  <div>
    <h1> {{ basic_info.name }} </h1>
    <div class="flexbox">
      <div>
        <i class="bi-envelope -inline"></i>
        <a class="u-ml5 -inline" :href="'mailto:' + basic_info.email"> {{ basic_info.email }} </a>
      </div>
      <div>
        <i class="bi-github"></i>
        <a class="u-ml5" :href="'https://www.github.com/' + basic_info.github">github.com/{{ basic_info.github }}</a>
      </div>
      <div>
        <i class="bi-link-45deg"></i>
        <a class="u-ml5"
          :href="'https://' + basic_info.githubio + '.github.io/cv-html'">{{ basic_info.githubio }}.github.io/cv-html</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basic_info: {}
    }
  },
  beforeCreate() {
    import(`../json/${this.$i18n.locale}/basic_info.json`)
      .then((e) => { this.basic_info = e.default })
  }
}
</script>
