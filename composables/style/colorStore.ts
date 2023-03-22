import { ColorsInterface } from '~/types/composables/style/colorStoreType'

export const useColorStore = defineStore('color', {
  state: () => ({
    color: {
      primary: {
        default: '#12CCC9',
        100: '#CEFCEB',
        200: '#9EF9E0',
        300: '#6CEFD6',
        400: '#46E0D0',
        500: '#12CCC9',
        600: '#0DA3AF',
        700: '#097D92',
        800: '#055A76',
        900: '#034261'
      },
      neutral: {
        default: '#CED6D6',
        100: '#FAFCFC',
        200: '#EBEFF0',
        300: '#DCE2E3',
        400: '#CED6D6',
        500: '#CED6D6',
        600: '#97A1A0',
        700: '#6F7877',
        800: '#484F4E',
        900: '#222625'
      },
      success: {
        default: '#87BA10',
        100: '#F3FBCD',
        200: '#E5F89D',
        300: '#CBEA69',
        400: '#AED543',
        500: '#87BA10',
        600: '#6E9F0B',
        700: '#588508',
        800: '#436B05',
        900: '#345903'
      },
      info: {
        default: '#02C2FC',
        100: '#CCFEFC',
        200: '#99FDFE',
        300: '#66F0FE',
        400: '#40DFFD',
        500: '#02C2FC',
        600: '#0197D8',
        700: '#0171B5',
        800: '#005092',
        900: '#003A78'
      },
      error: {
        default: '#FF4828',
        100: '#FFE7D3',
        200: '#FFC9A9',
        300: '#FFA57E',
        400: '#FF825D',
        500: '#FF4828',
        600: '#DB2A1D',
        700: '#B71415',
        800: '#930C18',
        900: '#7A071A'
      },
      warn: {
        default: '#F7C100',
        100: '#FEF8CB',
        200: '#FEEE98',
        300: '#FCE265',
        400: '#FAD53E',
        500: '#F7C100',
        600: '#D4A100',
        700: '#B18200',
        800: '#8F6600',
        900: '#765100'
      },
      theme: {
        // 初期値はLightModeの設定
        text: '#222625',
        subText: '#6F7877',
        background: '#EBEFF0',
        relativeNeutral: {
          default: '#CED6D6',
          100: '#FAFCFC',
          200: '#EBEFF0',
          300: '#DCE2E3',
          400: '#CED6D6',
          500: '#CED6D6',
          600: '#97A1A0',
          700: '#6F7877',
          800: '#484F4E',
          900: '#222625'
        }
      }
    } as ColorsInterface
  }),

  actions: {
    setLightTheme () {
      this.color.theme = {
        text: '#222625',
        subText: '#6F7877',
        background: '#EBEFF0',
        relativeNeutral: {
          default: '#CED6D6',
          100: '#FAFCFC',
          200: '#EBEFF0',
          300: '#DCE2E3',
          400: '#CED6D6',
          500: '#CED6D6',
          600: '#97A1A0',
          700: '#6F7877',
          800: '#484F4E',
          900: '#222625'
        }
      }
    },
    setDarkTheme () {
      this.color.theme = {
        text: '#EBEFF0',
        subText: '#CED6D6',
        background: '#222625',
        relativeNeutral: {
          default: '#CED6D6',
          100: '#222625',
          200: '#484F4E',
          300: '#97A1A0',
          400: '#6F7877',
          500: '#CED6D6',
          600: '#CED6D6',
          700: '#DCE2E3',
          800: '#EBEFF0',
          900: '#FAFCFC'
        }
      }
    }
  }
})
