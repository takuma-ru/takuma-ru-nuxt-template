<template>
  <div
    v-if="$pwa?.showInstallPrompt && !$pwa?.needRefresh"
    class="pwa-install-prompt"
  >
    
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
})
</script>

<style lang="scss" scoped>
.pwa-install-prompt {
  position: fixed;
}
</style>
