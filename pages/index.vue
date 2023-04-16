<template>
  <div id="index">
    {{ sm }}
    {{ lp }}
    {{ pc }}
    {{ displayType }}
    <Button icon="face">
      テストボタン
    </Button>
    <ColorModeButton />
    <Button
      @click="snackBarStore.sendNotification({
        description: new Date().toString(),
        isShow: true,
        isShowClose: true,
        type: 'pwa-install'
      })"
    >
      Add
    </Button>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */
const snackBarStore = useSnackBarStore()

/* -- variable(ref, reactive, computed) -- */
const { sm, lp, pc, displayType, displayTypeMixin } = displayStatus()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Index'
})
</script>

<style lang="scss" scoped>
#index {
  color: v-bind("displayTypeMixin({ sm: 'red', lp: 'blue', pc: 'green' })");
}
</style>
