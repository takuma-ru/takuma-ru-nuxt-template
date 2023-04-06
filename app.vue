<template>
  <div id="app">
    <VitePwaManifest />
    <SnackBarWrapper />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()
const layout = computed(() => {
  if (displayType.value === 'sm') {
    return 'smartphone'
  } else {
    return 'default'
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
onBeforeMount(() => {
  if (colorMode.value === 'dark') {
    colorStore.setDarkTheme()
  } else {
    colorStore.setLightTheme()
  }
})

</script>

<style lang="scss">
html, body {
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;
  /* overscroll-behavior-y: none;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: red;
    background-color: v-bind("colorMode.value === 'dark' ? '#222625' :'#EBEFF0'");
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  } */
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: v-bind("colorStore.$state.color.theme.background");
  color: v-bind("colorStore.$state.color.theme.text");
}
</style>
