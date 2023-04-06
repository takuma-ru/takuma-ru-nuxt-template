import type { Meta, Story } from '@storybook/vue3'
import SnackBarWrapper from './SnackBarWrapper.vue'

export default {
  title: 'components/utils/SnackBarWrapper',
  component: SnackBarWrapper,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnackBarWrapper },
  setup () {
    return { args }
  },
  template: '<SnackBarWrapper v-bind="args">{{ args.default }}</SnackBarWrapper>'
})

export const Primary = Template.bind({})
Primary.args = {
}
