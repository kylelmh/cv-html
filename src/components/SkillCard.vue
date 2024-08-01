<template>
<div class="p__skill_card">
  <div class="p__skill_levels flexbox">
    <h4> {{lang.name}}</h4>
    <svg viewBox="15 0 6 6" xmlns="http://www.w3.org/2000/svg">
    <circle v-for="(i) in lang.level" :cx="3+i*5" cy="3" r="1.5" stroke="black"/>
    <circle v-for="(i) in 3-lang.level" :cx="3+i*5+lang.level*5" cy="3" r="1.5" fill="none" stroke="black"/>
    </svg>
  </div>
  <div v-for="(i) in lang.frameworks" class="p__skill_tag"> {{i}}</div>
</div>
</template>

<script>
export default {
  props: {
    lang: Object
  },
}
</script>