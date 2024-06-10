<script lang="ts">

import {defineComponent} from "vue";
import InstallerComponent from "@/components/InstallerComponent.vue";

export default defineComponent({
  components: {InstallerComponent}
})
</script>

<template>
  <n-page-header subtitle="Pouic Installer"></n-page-header>
  <InstallerComponent></InstallerComponent>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
