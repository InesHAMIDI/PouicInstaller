<script lang="ts">
import {PackageInstallerType, PackageNames} from "@/assets/packageNames.ts";

export default {
  name: "InstallerComponent",

  data() {
    return {
      packages: PackageNames,
      packagesSelected: [] as PackageInstallerType[],

    }
  },
  methods: {
    select(pack: PackageInstallerType){
      this.packagesSelected.push(pack.code);
    },

    isSelected(pack: PackageInstallerType): boolean{
      return this.packagesSelected.find(pack.code);
    }
  }
}
</script>

<template>
  <div class="table">
    <NTable :single-line="false">
      <thead>
      <tr>
        <th><n-checkbox/></th>
        <th>Package</th>
        <th>Etat</th>
        <th><n-button tertiary>
          <font-awesome-icon :icon="['fas', 'download']"/>
        </n-button></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pack in packages" :key="pack">
        <td>
          <n-checkbox/>
        </td>
        <td>{{ pack.label }}</td>
        <td>
          <n-spin size="medium"/>
        </td>
        <td>
          <n-button tertiary>
            <font-awesome-icon :icon="['fas', 'download']"/>
          </n-button>
        </td>
      </tr>
      <tr>
        <td>
          <n-button tertiary>
            <font-awesome-icon :icon="['fas', 'download']"/>
          </n-button>
        </td>
      </tr>
      </tbody>
    </NTable>
  </div>
</template>

<style scoped>
table {
  color: black;
}
</style>