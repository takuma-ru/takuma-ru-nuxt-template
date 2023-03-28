<template>
  <div id="app-error">
    <div class="error">
      <span class="page-title">
        <Icon
          icon="error"
          size="0.8rem"
        />
        Oops!. Something seems to have gone wrong.
      </span>

      <h1 class="title">
        {{ error?.statusCode + ' = ' + errorTitle }}
      </h1>
      <hr>
      <span class="message">
        {{ error?.message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const error = useError()
const errorTitle = computed(() => {
  switch (error.value?.statusCode) {
    case 404:
      return 'Page not found'
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
}

#app-error {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  padding: 1rem 3rem;

  box-sizing: border-box;
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}

.error {
  .page-title {
    display: inline-flex;
    align-items: center;

    column-gap: 0.25rem;
    font-size: 0.8rem;
    color: v-bind("colorStore.color.theme.subText");
  }

  .title {
    display: flex;
    align-items: center;

    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 3rem;
  }

  .message {
    display: inline-flex;
    align-items: center;

    margin-top: 0.5rem;

    column-gap: 0.5rem;
  }
}
</style>
