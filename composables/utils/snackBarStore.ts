import { ISnackBarStoreState, IValue } from '~/types/composables/utils/snackBarStore'

export const useSnackBarStore = defineStore('snackBar', {
  state: (): ISnackBarStoreState => ({
    values: []
  }),

  getters: {
  },

  actions: {
    addSnackBar (snackBar: IValue) {
      this.values.push(snackBar)
    }
  }
})
