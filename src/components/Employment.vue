<template>
  <div class="p__section">
    <h3> {{ $t("employment") }} </h3>
    <div class="p__job" v-for="(v) in employment.data">
      <h4> {{ v.name }}</h4>
      <div class="p__job-position" v-for="(p) in v.positions">
        <div class="p__job-position-name">{{ p.name }} - {{ p.status }} </div>
        <div class="p__descriptor u-mb10"> {{ p.start }} - {{ p.end }} </div>
        <div class="p__basic_info">
          <div>{{ $t("work_description") }}: </div>
          <ul>
            <li v-for="(point) in p.description">
              {{ point }}
            </li>
          </ul>
          <template v-if="p.examples">
            <div>{{ $t("examples") }}: </div>
            <ul>
              <li v-for="(example) in p.examples">
                {{ example }}
              </li>
            </ul>
          </template>
          <template v-if="p.key_metrics">
            <div>{{ $t("key_metrics") }}: </div>
            <ul>
              <li v-for="(key_metric) in p.key_metrics">
                {{ key_metric }}
              </li>
            </ul>
          </template>
          <template v-if="p.skills">
            <div class="p__cell-center">{{ $t("skills") }}: </div>
            <ul>
              <li class="p__skill_tag" v-for="(skill) in p.skills">
                {{ skill }}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employment: {}
    }
  },
  beforeCreate() {
    import(`../json/${this.$i18n.locale}/employment.json`)
      .then((e) => { this.employment = e.default })
  },
  beforeUpdate() {
    import(`../json/${this.$i18n.locale}/employment.json`)
      .then((e) => { this.employment = e.default })
  }
}
</script>