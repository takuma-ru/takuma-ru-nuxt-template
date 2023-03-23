<template>
  <Button
    :icon="colorModeIcon"
    is-icon
    size="small"
    @click="switchMode()"
  />
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const colorMode = useColorMode()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const colorModeIcon = computed(() => {
  switch (colorMode.preference) {
    case 'dark':
      return 'dark_mode'
    case 'light':
      return 'light_mode'
    case 'system':
      return 'desktop_windows'
  }
})

/* -- function -- */
const switchMode = () => {
  switch (colorMode.preference) {
    case 'dark':
      colorMode.preference = 'light'
      colorStore.setLightTheme()
      break
    case 'light':
      colorMode.preference = 'dark'
      colorStore.setDarkTheme()
      break
    case 'system':
      colorMode.preference = 'dark'
      break
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>
