<template>
  <transition-group
    ref="snackBarWrapper"
    name="snack-bar-transition"
    appear
    class="utils-snack-bar-wrapper"
    tag="div"
  >
    <div
      v-for="value in snackBarStore.$state.activeValues"
      :key="value.uuid"
      class="snack-bar"
      :type="value.type"
      :style="{
        backgroundColor: icon(value.type).background,
        color: icon(value.type).text,
        borderColor: icon(value.type).cover
      }"
    >
      <div
        class="icon"
        :style="{
          backgroundColor: icon(value.type).cover
        }"
      >
        <Icon
          :icon="icon(value.type).iconName"
          :color="icon(value.type).background"
        />
      </div>
      <div
        class="contents"
        v-text="value.description"
      />
      <div
        class="actions"
      >
        <Button
          is-icon
          icon="close"
          color="transparent"
          :icon-props="{
            color: icon(value.type).text
          }"
          @click="snackBarStore.deactivateNotification(value.uuid)"
        />
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
import { IValue } from '~/types/composables/utils/snackBarStore'
import { IconNameType } from '~/types/icon/IconNameType'

interface ISnackBarColor {
  background: string
  text: string
  cover: string
  iconName: IconNameType
}

/* -- store -- */
const snackBarStore = useSnackBarStore()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const icon = (type: IValue['type']): ISnackBarColor => {
  switch (type) {
    case 'custom':
      return {
        iconName: 'notifications',
        background: colorStore.$state.color.primary[200],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.primary[900]
      }
    case 'info':
      return {
        iconName: 'info',
        background: colorStore.$state.color.info[200],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.info[800]
      }
    case 'error':
      return {
        iconName: 'error',
        background: colorStore.$state.color.error[400],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.error[600]
      }
    case 'primary':
      return {
        iconName: 'notifications',
        background: colorStore.$state.color.primary[600],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.primary[800]
      }
    case 'pwa-install':
      return {
        iconName: 'install_desktop',
        background: colorStore.$state.color.theme.relativeNeutral[500],
        text: colorStore.$state.color.theme.background,
        cover: colorStore.$state.color.theme.relativeNeutral[900]
      }
    case 'pwa-update':
      return {
        iconName: 'notifications',
        background: colorStore.$state.color.primary[100],
        text: colorStore.$state.color.theme.background,
        cover: colorStore.$state.color.primary[800]
      }
    case 'success':
      return {
        iconName: 'check_circle',
        background: colorStore.$state.color.success[200],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.success[800]
      }
    case 'warn':
      return {
        iconName: 'warning',
        background: colorStore.$state.color.primary[600],
        text: colorStore.$state.color.neutral[900],
        cover: colorStore.$state.color.primary[800]
      }
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.utils-snack-bar-wrapper {
  display: flex;
  flex-flow: column;
  row-gap: 0.5rem;

  position: fixed;
  height: fit-content;
  z-index: 99999;
  right: 0px;
  top: 0px;
  margin: 1rem;

  .snack-bar {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr) 48px;
    align-items: center;

    position: relative;
    width: min(calc(100vw - 2rem), 512px);
    min-height: 48px;

    border-radius: 0.5rem;
    filter: drop-shadow(0px 16px 40px rgba(34, 38, 37, 0.2));
    /* border: 4px solid; */

    .icon {
      display: grid;
      place-items: center;

      width: 100%;
      height: 100%;

      border-radius: 0.5rem 0 0 0.5rem;
    }

    .contents {
      padding: 0.5rem 1rem;

      overflow-wrap: break-word;
    }

    .actions {
      cursor: pointer;
    }
  }
}

.snack-bar-transition {
  &-enter {
    &-from {
      right: -684px !important;
    }
    &-active {
      well-change: right;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    &-to {
      right: 0px !important;
    }
  }

  &-leave {
    &-from {
      right: 0px !important;
    }
    &-active {
      position: absolute;
      well-change: right;
      transition: all 0.25s cubic-bezier(.25,.8,.25,1);
    }
    &-to {
      right: -684px !important;
    }
  }

  &-move {
    transition: all 0.25s cubic-bezier(.25,.8,.25,1);
  }

  /* &-move:not(.snack-bar-transition-leave-active){
    transition-delay: 1s;
  } */
}
</style>
