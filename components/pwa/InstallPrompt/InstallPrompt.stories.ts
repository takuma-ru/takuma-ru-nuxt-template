import type { Meta, Story } from '@storybook/vue3'
import InstallPrompt from './InstallPrompt.vue'

export default {
  title: 'components/pwa/InstallPrompt',
  component: InstallPrompt,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InstallPrompt },
  setup () {
    return { args }
  },
  template: '<InstallPrompt v-bind="args">{{ args.default }}</InstallPrompt>'
})

export const Primary = Template.bind({})
Primary.args = {
}
