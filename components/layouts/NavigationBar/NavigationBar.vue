<template>
  <div
    v-if="lp || pc"
    id="navigationBar"
  >
    <div class="buttons">
      <div
        v-for="link in links"
        :key="link.name"
        :style="{
          marginBottom: '2em'
        }"
      >
        <Button
          is-icon
          :icon="link.icon"
          :to="link.path"
          :icon-props="{
            fill: route.path === link.path ? true : false,
            color: route.path === link.path ? colorStore.$state.color.theme.text : colorStore.$state.color.theme.subText
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
interface ILinks {
  name: string
  icon: IconNameType
  path: string
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { lp, pc } = displayStatus()
const route = useRoute()

const links = ref<ILinks[]>([
  {
    name: 'top',
    icon: 'home',
    path: '/'
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: '/dashboard'
  },
  {
    name: 'setting',
    icon: 'settings',
    path: '/setting'
  }
])

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationBar {
  display: flex;
  justify-content: center;

  padding: 2em 0px;

  border-right: solid 1px v-bind("colorStore.$state.color.theme.relativeNeutral[200]");
}
</style>
