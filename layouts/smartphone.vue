<template>
  <div id="smartphone-layout">
    <div class="contents">
      <slot />
    </div>
    <BottomNavigationBar />
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
</script>

<style lang="scss" scoped>
#smartphone-layout {
  display: grid;
  grid-template-rows: 1fr 64px;

  position: relative;
  width: 100%;
  height: 100%;

  .contents {
    padding: 1em;
  }
}
</style>
