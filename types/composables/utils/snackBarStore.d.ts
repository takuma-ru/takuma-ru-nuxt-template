import { IconNameType } from '~/types/icon/IconNameType'
import { IButtonProps, IButtonEmits } from '~/components/utils/Button/Button.vue'

export interface ISnackBarStoreState {
  values: Array<IValue>
}

export interface IValue {
  /**
   * Configure buttons for actions to be displayed in the snack bar.
   */
  actions?: Array<IButtonProps & IButtonEmits>
  /**
   * Snack bar background color to apply when `type = 'custom'`.
   */
  color? : string
  description: string
  /**
   * Snack bar Icon to apply when `type = 'custom'`.
   */
  icon?: IconNameType
  /**
   * Flag whether this snack bar is visible or not.
   *
   * If false, the snack bar is hidden.
   * @default true
   */
  isShow: boolean
  /**
   * Flag whether the close button is displayed or not.
   * @default true
   */
  isShowClose: boolean
  /**
   * milliseconds to hide.
   * @default 5000
   */
  timeout?: number
  /**
   * Snack bar display type.
   * @default 'primary'
   */
  type: 'success' | 'warn' | 'error' | 'info' | 'primary' | 'pwa-install' | 'pwa-update' | 'custom'
}