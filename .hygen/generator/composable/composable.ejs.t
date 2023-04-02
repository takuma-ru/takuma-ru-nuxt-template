---
to: composables/<%= atomic %>/<%= h.changeCase.camel(storeName) %>Store.ts
---
import { I<%= h.changeCase.pascal(storeName) %>StoreState } from '~/types/composables/utils/<%= h.changeCase.camel(storeName) %>Store'

export const use<%= h.changeCase.pascal(storeName) %>Store = defineStore('<%= h.changeCase.camel(storeName) %>', {
  state: (): I<%= h.changeCase.pascal(storeName) %>StoreState => ({
  }),

  getters: {
  },

  actions: {
  }
})
