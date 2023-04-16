import { v4 as uuidv4 } from 'uuid'
import { ISnackBarStoreState, IArgValue, IValue } from '~/types/composables/utils/snackBarStore'

export const useSnackBarStore = defineStore('snackBar', {
  state: (): ISnackBarStoreState => ({
    activeValues: [],
    inactiveValues: []
  }),

  getters: {
  },

  actions: {
    /**
     * 通知バーを表示させる
     */
    sendNotification (snackBar: IArgValue) {
      const uuid = uuidv4()
      this.activeValues.unshift({
        uuid,
        ...snackBar
      })
    },
    /**
     * 引数のuuidに一致する通知を非表示にする
     */
    deactivateNotification (uuid: IValue['uuid']) {
      const index = this.activeValues.findIndex(value => value.uuid === uuid)
      this.inactiveValues.unshift(this.activeValues[index])
      this.activeValues.splice(index, 1)
    }
  }
})
