<script lang="ts">
import {PackageInstallerType, PackageNames} from "@/assets/packageNames.ts";
import {ref} from "vue";

export default {
  name: "InstallerComponent",
  setup() {
    return {
      checked: ref(false),
      handleUpdateChecked(value: string) {
        console.log(String(value));
      },
    }
  },

  data() {
    return {
      packages: PackageNames,
      packagesSelected: [] as PackageInstallerType[],
    }
  },

  methods: {}
}
</script>

<template>
  <div class="table">
    <NTable :single-line="false">
      <thead>
      <tr>
        <th scope="col">
          <n-checkbox v-model:checked="checked"/>
        </th>
        <th scope="col">Package</th>
        <th scope="col">Etat</th>
        <th scope="col">
          <n-button tertiary>
            <font-awesome-icon :icon="['fas', 'download']"/>
          </n-button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pack in packages" :key="pack">
        <td>
          <n-checkbox
              :checked="checked"
              @update:checked="handleUpdateChecked(pack.code)"
          />
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