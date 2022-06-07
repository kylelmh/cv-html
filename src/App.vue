<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="bi-printer p__print_btn no-print" v-on:click="print"></div>
    <nav class="no-print">
      <RouterLink to="/" :active-class="'active'"> CV </RouterLink>
      <RouterLink to="/letter" :active-class="'active'"> Cover Letter </RouterLink>
    </nav>
    <RouterView></RouterView>
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
    print(){
      window.print()
    },
    setLocale(e) {
      this.$i18n.locale = e
    }
  }
}
</script>